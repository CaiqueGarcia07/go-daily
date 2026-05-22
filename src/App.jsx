import { useState, useCallback } from 'react';

import { CartProvider } from './context/CartContext';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import MobileNav from './components/layout/MobileNav/MobileNav';

import AnnouncementStrip from './components/ui/AnnouncementStrip/AnnouncementStrip';
import CartDrawer from './components/ui/CartDrawer/CartDrawer';
import Toast from './components/ui/Toast/Toast';
import ScrollTop from './components/ui/ScrollTop/ScrollTop';

import Hero from './components/sections/Hero/Hero';
import Catalog from './components/sections/Catalog/Catalog';
import HowItWorks from './components/sections/HowItWorks/HowItWorks';
import Benefits from './components/sections/Benefits/Benefits';
import ProductDetail from './components/sections/ProductDetail/ProductDetail';
import TrustBar from './components/sections/TrustBar/TrustBar';
import Reviews from './components/sections/Reviews/Reviews';
import PromoBanner from './components/sections/PromoBanner/PromoBanner';
import Newsletter from './components/sections/Newsletter/Newsletter';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, text: '', sub: '' });

  const showToast = useCallback((productName) => {
    setToast({ show: true, text: 'Produto adicionado!', sub: productName });
    setCartOpen(true);
  }, []);

  const hideToast = useCallback(() => {
    setToast((t) => ({ ...t, show: false }));
  }, []);

  return (
    <CartProvider>
      <Toast show={toast.show} text={toast.text} sub={toast.sub} onHide={hideToast} />
      <ScrollTop />

      <AnnouncementStrip />

      <Header
        onCartOpen={() => setCartOpen(true)}
        onMobileNavOpen={() => setMobileNavOpen(true)}
      />

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <Hero />
        <Catalog onToast={showToast} />
        <HowItWorks />
        <Benefits />
        <ProductDetail onToast={showToast} />
        <TrustBar />
        <Reviews />
        <PromoBanner />
        <Newsletter />
      </main>

      <Footer />
    </CartProvider>
  );
}
