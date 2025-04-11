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
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </span>
          </Link>
          {breadcrumbItems.length > 0 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li key={item.href + index} className="flex items-center">
            {item.isLast ? (
              <span className="text-gray-300 flex items-center gap-1">
                {item.label.includes('Chapters') && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                  </svg>
                )}
                {item.label.includes('Verse of the Day') && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                )}
                {item.label.match(/^\d+\s*-/) && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                )}
                {item.label.match(/^\d+\.\d+$/) && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                )}
                {item.label}
              </span>
            ) : (
              <>
                <Link href={item.href} className="text-orange-400 hover:text-orange-300">
                  <span className="flex items-center gap-1">
                    {item.label.includes('Chapters') && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {item.label.includes('Verse of the Day') && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    )}
                    {item.label.match(/^\d+\s*-/) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    )}
                    {item.label.match(/^\d+\.\d+$/) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    )}
                    {item.label}
                  </span>
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