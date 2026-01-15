import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import LogoIcon from "../../icons/logo";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="border-b border-brand-sand bg-brand-cream p-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
  
        <div className="flex flex-1 items-center">
          <div className="md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link href="/" prefetch={true} className="flex items-center">
            <LogoIcon />
          </Link>
        </div>

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