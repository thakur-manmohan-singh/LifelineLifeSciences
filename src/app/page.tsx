import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Products from '@/components/sections/products';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
