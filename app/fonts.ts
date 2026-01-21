import localFont from 'next/font/local';

export const cormorant = localFont({
  src: [
    { path: '../fonts/cormorant-garamond-v21-latin-300.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/cormorant-garamond-v21-latin-300italic.woff2', weight: '300', style: 'italic' },
    { path: '../fonts/cormorant-garamond-v21-latin-regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/cormorant-garamond-v21-latin-italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/cormorant-garamond-v21-latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/cormorant-garamond-v21-latin-500italic.woff2', weight: '500', style: 'italic' },
    { path: '../fonts/cormorant-garamond-v21-latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/cormorant-garamond-v21-latin-600italic.woff2', weight: '600', style: 'italic' },
    { path: '../fonts/cormorant-garamond-v21-latin-700.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/cormorant-garamond-v21-latin-700italic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
});

export const geist = localFont({
  src: [
    { path: '../fonts/geist-v4-latin-100.woff2', weight: '100', style: 'normal' },
    { path: '../fonts/geist-v4-latin-200.woff2', weight: '200', style: 'normal' },
    { path: '../fonts/geist-v4-latin-300.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/geist-v4-latin-regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/geist-v4-latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/geist-v4-latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/geist-v4-latin-700.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/geist-v4-latin-800.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/geist-v4-latin-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-geist',
  display: 'swap',
});

export const kaushan = localFont({
  src: '../fonts/kaushan-script-v19-latin-regular.woff2',
  variable: '--font-kaushan',
  display: 'swap',
});