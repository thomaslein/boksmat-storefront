import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <h1>Dette er en header</h1>
      <p>Dette er en body tekst</p>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
