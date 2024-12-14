import Hero from "@/components/Hero";

import Products from "@/components/Products";
import Chair from "@/components/Chair";
import Square from "@/components/Square";

import Blogs from "@/components/Blogs";
import InstagramSection from "@/components/Instagram";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <Square />

      <Products />

      <Chair />
      <Blogs />
      <InstagramSection />
    </main>
  );
}
