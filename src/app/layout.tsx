import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Editor Lab',
  description: 'Editor Lab',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
