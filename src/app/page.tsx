import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Chair from "@/components/Chair";
import Square from "@/components/Square";



export default function Homepage () {
  return (
    <main>
<Navbar/>
<Hero/>
{/* <Chair/> */}
<Products/>
<Square/>

      <Footer/>
    </main>
  );
}
