import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import StoreGallerySection from "@/components/StoreGallerySection";
import StoreSection from "@/components/StoreSection";
import BrandSection from "@/components/BrandSection";
import GrauSection from "@/components/GrauSection";
import FreteSection from "@/components/FreteSection";
import PainelSection from "@/components/PainelSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <StoreGallerySection />
        <StoreSection />
        <BrandSection />
        <GrauSection />
        <FreteSection />
        <PainelSection />
        <TestimonialsSection />
        <WhatsAppSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
