'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        As Krishna teaches in the Gita, we must face challenges with equanimity. Let's try again.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Try again
        </button>
        <Link href="/" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition-colors text-center">
          Return Home
        </Link>
      </div>
    </div>
  );
} 