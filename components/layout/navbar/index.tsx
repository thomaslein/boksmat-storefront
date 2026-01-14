import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="border-b border-brand-sand bg-brand-cream p-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* 1. Left Section: Logo & Mobile Menu */}
        <div className="flex flex-1 items-center">
          <div className="md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link href="/" prefetch={true} className="flex items-center">
             {/* Text-based logo for that editorial feel */}
            <span className="font-serif text-2xl font-bold uppercase tracking-tighter text-brand-dark">
              {SITE_NAME}
            </span>
          </Link>
        </div>

        {/* 2. Center Section: Navigation Links */}
        <div className="hidden flex-none md:block">
          {menu.length ? (
            <ul className="flex items-center gap-8">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="font-serif text-xs font-semibold uppercase tracking-widest text-brand-dark hover:opacity-60"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* 3. Right Section: Search & Cart */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden lg:block w-48">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex h-10 w-10 items-center justify-center text-brand-dark">
             <CartModal />
          </div>
        </div>
        
      </div>
    </nav>
  );
}