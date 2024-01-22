'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThreatIntelligencePage() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`${pathname}/organization`, {
      scroll: false,
    });
  }, [pathname, router]);

  return null;
}
