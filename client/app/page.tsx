import Features from "@/pages/components/Features";
import Hero from "@/pages/components/Hero";
import Navbar from "@/pages/components/Navbar";
import Services from "@/pages/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
    </div>
  );
}
