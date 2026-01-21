import { readFileSync } from 'fs';
import { ImageResponse } from 'next/og';
import { join } from 'path';
import LogoIcon from './icons/logo';

// 1. Switch to 'nodejs' runtime for stable filesystem access
export const runtime = 'nodejs'; 

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpengraphImage(props?: { title?: string }) {
  const title = props?.title ?? process.env.SITE_NAME ?? 'BOKSMAT';

  // 2. Read the .ttf file from the root public directory
  // Note: Ensure the file is a .ttf (not .woff2)
  const fontPath = join(process.cwd(), 'public/fonts/cormorant-garamond-v21-latin-700.ttf');
  const fontData = readFileSync(fontPath);

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#fcf7cd]">
        <div tw="flex flex-none items-center justify-center border border-neutral-300 h-[160px] w-[160px] rounded-3xl bg-white shadow-sm">
          <LogoIcon width="80" height="74" fill="#1a1a1a" />
        </div>
        <h1 tw="mt-12 text-7xl font-bold text-[#1a1a1a] text-center px-20">
          {title}
        </h1>
        <p tw="mt-4 text-2xl text-[#1a1a1a] opacity-60">
          Gourmet på boks • Lein & Co
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}