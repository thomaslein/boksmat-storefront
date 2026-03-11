
import { getMenu } from "lib/shopify";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const skeleton =
    "w-full h-6 animate-pulse rounded-sm bg-neutral-200";
  const menu = await getMenu("footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="text-neutral-500">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-md md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 ">
        <p>{copyrightName} {currentYear}</p>
      </div>
    </footer>
  );
}
