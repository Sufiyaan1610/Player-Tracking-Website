import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutClient from './layout-client'; // 👈 新增

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Orion Labs – Player Tracking System',
  description: 'Advanced AI-powered sports analytics and player tracking system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-black`}>
        <LayoutClient>{children}</LayoutClient> {/* 👈 用 client layout 包裹 */}
      </body>
    </html>
  );
}
