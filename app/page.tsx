import { Hero } from "@/components/sections/Hero";
import { Pains } from "@/components/sections/Pains";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { Cases } from "@/components/sections/Cases";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pains />
      <ServicesGrid />
      <Process />
      <Cases limit={4} />
      <WhyUs />
      <Testimonials />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
