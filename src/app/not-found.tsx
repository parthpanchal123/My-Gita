import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | My-Gita',
  description: 'The page you are looking for could not be found. Explore the Bhagavad Gita instead.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        The page you are looking for could not be found. As Krishna says in the Gita, sometimes we must accept what we cannot change.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors">
          Return Home
        </Link>
        <Link href="/chapter" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition-colors">
          Explore Chapters
        </Link>
      </div>
    </div>
  );
} 