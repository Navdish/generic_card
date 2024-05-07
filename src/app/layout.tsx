"use client"
import BarComponent from '@/component/BarComponent';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './global.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppRouterCacheProvider>
          <BarComponent>
          {children}
          </BarComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
