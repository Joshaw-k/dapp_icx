import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Selections from "./components/Selections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#080326] mb-0 pb-0">
      <Header />
      <Hero />
      <Selections />
      <Footer />
    </div>
  );
}
