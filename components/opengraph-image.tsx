import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  const file = await readFile(join(process.cwd(), "public/fonts/cormorant-garamond-v21-latin-700.ttf"));
  const font = Uint8Array.from(file).buffer;

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="#94a3b8" />
            <circle cx="16" cy="16" r="13" fill="#cbd5e1" stroke="#64748b" stroke-width="0.5" />
            <circle cx="16" cy="16" r="9" fill="#fbbf24" />
            
            <g transform="translate(-1, 0)">
              <path d="M9 16 Q 15 10, 21 16 Q 15 22, 9 16" fill="#1e293b" />
              <path d="M21 16 L25 13 L25 19 Z" fill="#1e293b" />
            </g>
            
            <circle cx="16" cy="5.5" r="2" fill="none" stroke="#475569" stroke-width="1.2" />
          </svg>
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Gesist",
          data: font,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
