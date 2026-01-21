import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";
import LogoIcon from "./icons/logo";

export const runtime = 'edge'; // Edge runtime is faster for OG images

// Define the dimensions of the OG image
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpengraphImage({ title }: { title?: string }) {
  const fontPath = join(process.cwd(), 'app/fonts/cormorant-garamond-v21-latin-700.ttf');
  const fontData = await readFile(fontPath);

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#fcf7cd]">
        <div tw="flex flex-none items-center justify-center border border-neutral-300 h-[160px] w-[160px] rounded-3xl bg-white shadow-sm">
          <LogoIcon width="80" height="74" fill="#1a1a1a" />
        </div>
        <h1 tw="mt-12 text-7xl font-bold text-[#1a1a1a] text-center px-20">
          {title || "BOKSMAT"}
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
          name: "Cormorant",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}