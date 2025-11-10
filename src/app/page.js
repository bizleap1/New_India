import AboutShowcase from "@/components/AboutShowcase";
import AboutUsSection from "@/components/Aboutus";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";


export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUsSection/>
      <AboutShowcase/>
      <ProductsSection/>
    </>
  );
}
