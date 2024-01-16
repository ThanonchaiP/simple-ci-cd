'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LogManagementPage() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`${pathname}/dashboard`, {
      scroll: false,
    });
  }, [pathname, router]);

  return <></>;
}
