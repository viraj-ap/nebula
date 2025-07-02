import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import BentoGrid from "@/components/bento-grid";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-white dark:bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 z-0 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_center,#ffffff25,#ffffff00)] dark:bg-[radial-gradient(circle_400px_at_center,#8a6eff36,#000)]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="Features">
          <BentoGrid />
        </div>
        <div id="FAQs">
          <Faqs />
        </div>
        <div id="Contact">
          <Footer />
        </div>
      </div>
    </div>
  );
}
