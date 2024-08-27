import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
