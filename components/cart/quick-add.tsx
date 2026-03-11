"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { addItem } from "components/cart/actions";
import { Product } from "lib/shopify/types";
import { useActionState } from "react";
import { useCart } from "./cart-context";

export function QuickAdd({ product }: { product: Product }) {
  const { addCartItem } = useCart();
  const [message, formAction] = useActionState(addItem, null);

  const defaultVariant =
    product.variants.length === 1 ? product.variants[0] : undefined;

  if (!defaultVariant || !product.availableForSale) return null;

  const addItemAction = formAction.bind(null, defaultVariant.id);

  return (
    <form
      action={async () => {
        addCartItem(defaultVariant, product);
        addItemAction();
      }}
    >
      <button
        type="submit"
        aria-label="Legg i handlekurv"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
