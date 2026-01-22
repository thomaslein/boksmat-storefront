'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 flex items-center text-sm font-sans text-neutral-500 hover:text-black transition-colors cursor-pointer"
    >
      <span className="mr-2">←</span> Tilbake
    </button>
  );
}