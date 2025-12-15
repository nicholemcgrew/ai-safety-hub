// src/app/layout.tsx
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme';
import SkipToContent from '@/components/SkipToContent';

export const metadata: Metadata = {
  title: {
    default: 'AI Safety Hub',
    template: '%s | AI Safety Hub',
  },
  description:
    'Evidence-based AI safety, governance, regulation tracking, stats, and tools—built for safe and ethical AI.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: {
  default: process.env.NEXT_PUBLIC_APP_NAME || 'AI Safety Hub',
  template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME || 'AI Safety Hub'}`,
},
    description:
      'Evidence-based AI safety, governance, regulation tracking, stats, and tools—built for safe and ethical AI.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* 508 / WCAG: keyboard skip link */}
            <SkipToContent />

            {/* Landmarks */}
            <header aria-label="Site header">{/* TODO: Nav goes here */}</header>

            <main id="main-content" tabIndex={-1}>
              {children}
            </main>

            <footer aria-label="Site footer">{/* TODO: Footer goes here */}</footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
