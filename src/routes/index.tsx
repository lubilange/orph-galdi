import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Hero,
  About,
  Actions,
  Gallery,
  Don,
  Testimonials,
  Contact,
} from "@/components/site/sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GALDI — Orphelinat : offrons un avenir à chaque enfant" },
      {
        name: "description",
        content:
          "GALDI est un orphelinat solidaire offrant éducation, santé, hébergement et amour à chaque enfant. Découvrez nos actions et soutenez-nous.",
      },
      { property: "og:title", content: "GALDI — Orphelinat solidaire" },
      {
        property: "og:description",
        content:
          "Ensemble, offrons à chaque enfant un foyer, une éducation et un avenir. Faites un don ou rejoignez nos bénévoles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Actions />
        <Gallery />
        <Don />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
