import Navbar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Section3DWrapper from "@/components/ui/Section3DWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-primary">
      {/* Sticky Top Navigation Header */}
      <Navbar />

      {/* Main Content Area with 3D Spatial Transition Wrappers */}
      <main className="min-h-screen">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
          <Section3DWrapper>
            <Hero />
          </Section3DWrapper>

          <Section3DWrapper>
            <About />
          </Section3DWrapper>

          <Section3DWrapper>
            <Achievements />
          </Section3DWrapper>

          <Section3DWrapper>
            <Skills />
          </Section3DWrapper>

          <Section3DWrapper>
            <Experience />
          </Section3DWrapper>

          <Section3DWrapper>
            <Projects />
          </Section3DWrapper>

          <Section3DWrapper>
            <Gallery />
          </Section3DWrapper>

          <Section3DWrapper>
            <Contact />
          </Section3DWrapper>

          <Footer />
        </div>
      </main>
    </div>
  );
}
