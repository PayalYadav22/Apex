import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import Feature from '@/components/Feature';
import Process from '@/components/Process';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brand />
        <Feature />
        <Process />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
