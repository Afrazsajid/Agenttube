import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorksSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <FeaturesSection/>
    <HowItWorks/>

   </div>
  );
}
