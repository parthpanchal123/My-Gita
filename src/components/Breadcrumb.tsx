'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getChapterName, type ChapterData } from '@/utils/chapter';

interface BreadcrumbItem {
  href: string;
  label: string;
  isLast: boolean;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const [chapterData, setChapterData] = useState<ChapterData | null>(null);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  
  useEffect(() => {
    if (!pathname || pathname === '/') {
      setBreadcrumbItems([]);
      return;
    }

    // Create breadcrumb items based on path
    const pathSegments = pathname.split('/').filter(segment => segment);
    const items: BreadcrumbItem[] = [];

    // Find chapter number in the path
    const chapterIndex = pathSegments.findIndex(seg => seg === 'chapter') + 1;
    const chapterNumber = pathSegments[chapterIndex];
    
    if (chapterNumber && !isNaN(Number(chapterNumber))) {
      getChapterName(chapterNumber).then(data => {
        setChapterData(data);
      });
    }

    // Process segments to create breadcrumb items
    pathSegments.forEach((segment, index) => {
      // Special case handling for verseOfTheDay
      if (segment === 'verseOfTheDay') {
        items.push({
          href: '/verseOfTheDay',
          label: 'Verse of the Day',
          isLast: true
        });
        return;
      }

      // Special case handling for chapter listing page
      if (segment === 'chapter' && index === pathSegments.length - 1) {
        items.push({
          href: '/chapter',
          label: 'Chapters',
          isLast: true
        });
        return;
      }

      // For chapter numbers
      if (!isNaN(Number(segment)) && pathSegments[index - 1] === 'chapter') {
        // Always add Chapters link before the chapter number
        if (!items.some(item => item.label === 'Chapters')) {
          items.push({
            href: '/chapter',
            label: 'Chapters',
            isLast: false
          });
        }
        
        items.push({
          href: `/chapter/${segment}`,
          label: chapterData ? `${segment} - ${chapterData.nameTranslated}` : `${segment}`,
          isLast: pathSegments.length - 1 === index
        });
        return;
      }

      // For verse numbers
      if (!isNaN(Number(segment)) && pathSegments[index - 1] === 'verse') {
        const chapterIndex = pathSegments.findIndex(seg => seg === 'verse') - 1;
        const chapterNumber = pathSegments[chapterIndex];

        // Add Chapters link if not present
        if (!items.some(item => item.label === 'Chapters')) {
          items.push({
            href: '/chapter',
            label: 'Chapters',
            isLast: false
          });
        }

        // Only add chapter if we have a valid chapter number and it's not already added
        if (chapterNumber && !isNaN(Number(chapterNumber)) && 
            !items.some(item => item.label.startsWith(chapterNumber))) {
          items.push({
            href: `/chapter/${chapterNumber}`,
            label: chapterData ? `${chapterNumber} - ${chapterData.nameTranslated}` : `${chapterNumber}`,
            isLast: false
          });
        }

        items.push({
          href: `#`,
          label: `${chapterNumber}.${segment}`,
          isLast: true
        });
        return;
      }

      // Skip the 'verse' segment
      if (segment === 'verse') {
        return;
      }

      // Default case for other segments
      if (!['chapter', 'verse'].includes(segment) && isNaN(Number(segment))) {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/([A-Z])/g, ' $1');
        items.push({
          href,
          label,
          isLast: index === pathSegments.length - 1
        });
      }
    });

    setBreadcrumbItems(items);
  }, [pathname, chapterData]);

  if (!pathname || pathname === '/') return null;
  
  return (
    <nav aria-label="Breadcrumb" className="bg-neutral-800 p-2 text-sm">
      <ol className="flex flex-wrap items-center">
        <li className="flex items-center">
          <Link href="/" className="text-orange-400 hover:text-orange-300">
            Home
          </Link>
          {breadcrumbItems.length > 0 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li key={item.href + index} className="flex items-center">
            {item.isLast ? (
              <span className="text-gray-300">{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className="text-orange-400 hover:text-orange-300">
                  {item.label}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 