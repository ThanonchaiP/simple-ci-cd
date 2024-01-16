'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SiemPage() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`${pathname}/detection-rule`, {
      scroll: false,
    });
  }, [pathname, router]);

  return <></>;
}
