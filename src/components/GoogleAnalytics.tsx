'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return <GA gaId={GA_MEASUREMENT_ID} />;
} 