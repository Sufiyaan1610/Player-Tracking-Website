'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname === '/login' || pathname === '/signup';

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {!hideNavbar && <Navbar />}
      {children}
    </ThemeProvider>
  );
}
