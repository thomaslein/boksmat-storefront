import { QuickAdd } from "components/cart/quick-add";
import { getCollectionProducts, getCollections } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import Price from "../price";

export async function CollectionsGrid() {
  const collections = await getCollections();
  const filtered = collections.filter((c) => c.handle !== "");

  if (!filtered.length) return null;

  const collectionsWithProducts = await Promise.all(
    filtered.map(async (collection) => ({
      collection,
      products: await getCollectionProducts({ collection: collection.handle }),
    }))
  );

  const nonEmpty = collectionsWithProducts.filter(
    ({ products }) => products.length > 0
  );

  if (!nonEmpty.length) return null;

  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 py-8 space-y-10">
      {nonEmpty.map(({ collection, products }) => (
        <div key={collection.handle}>
          <h2 className="mb-4 text-xl font-semibold">{collection.title}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.handle}
                className="group flex flex-col overflow-hidden rounded-lg bg-brand-paper"
              >
                <Link
                  href={`/product/${product.handle}`}
                  className="relative aspect-square block overflow-hidden"
                >
                  {product.featuredImage ? (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
                    />
                  ) : null}
                </Link>
                <div className="flex items-center justify-between gap-2 p-3">
                  <div className="min-w-0">
                    <Link
                      href={`/product/${product.handle}`}
                      className="block text-sm font-semibold leading-tight line-clamp-1 hover:underline"
                    >
                      {product.title}
                    </Link>
                    <Price
                      className="mt-0.5 text-sm text-neutral-500"
                      amount={product.priceRange.minVariantPrice.amount}
                      currencyCode={
                        product.priceRange.minVariantPrice.currencyCode
                      }
                    />
                  </div>
                  <QuickAdd product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
