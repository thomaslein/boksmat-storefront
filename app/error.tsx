"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-brand-paper p-8 md:p-12">
      <h2 className="text-3xl font-bold">Ups!</h2>
      <p className="my-2">
        Det oppsto et problem å vise boksmat. Prøv igjen!
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-black p-4 tracking-wide text-white hover:opacity-90 cursor-pointer"
        onClick={() => reset()}
      >
        Prøv igjen
      </button>
    </div>
  );
}
