import CartModal from "components/cart/modal";
import Link from "next/link";
import Logo from "../../icons/logo";

export async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-2 lg:px-6">
      <Link href="/" prefetch={true} className="flex items-center">
        <Logo />
      </Link>
      <CartModal />
    </nav>
  );
}