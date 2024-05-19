import Features from "@/pages/components/Features";
import Form from "@/pages/components/FormAndFooter";
import Hero from "@/pages/components/Hero";
import Navbar from "@/pages/components/Navbar";
import PreviousWorks from "@/pages/components/PreviousWorks";
import Services from "@/pages/components/Services";
import Steps from "@/pages/components/Steps";
import Testimonials from "@/pages/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <PreviousWorks />
      <Testimonials />
      <Steps />
      <Form />
    </div>
  );
}
