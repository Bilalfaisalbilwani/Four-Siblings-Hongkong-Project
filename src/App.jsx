import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Contact from './pages/Contact.jsx';
import { PRODUCTS } from './data/products.js';

// ─── FONT INJECTION ───────────────────────────────────────────────────────────
function useFonts() {
  useEffect(() => {
    const id = 'af-fonts';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Tahoma&display=swap';
      document.head.appendChild(link);
    }

    if (!document.getElementById('af-font-style')) {
      const style = document.createElement('style');
      style.id = 'af-font-style';
      style.textContent = `
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #FFFFFF;
          color: #1E293B;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        .af { font-family: Tahoma, sans-serif; letter-spacing: 0.01em; }
        .af-d { font-family: Cambria, serif; letter-spacing: 0.02em; line-height: 1.2; }
        p { line-height: 1.75; }
        button, input, textarea, select { font-family: 'Inter', sans-serif; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #174EA6; border-radius: 10px; }
        ::-webkit-scrollbar-track { background: #E9EEF5; }
        @keyframes whatsappPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @media (max-width: 1024px) {
          .af-hmbg { display: flex !important; }
          .af-dnav, .af-dcta { display: none !important; }
        }
        @media (min-width: 1025px) {
          .af-hmbg { display: none !important; }
          .af-dnav { display: flex !important; }
          .af-dcta { display: flex !important; }
        }
        @media (max-width: 768px) {
          html, body { overflow-x: hidden; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
          h1 { font-size: 38px !important; line-height: 1.1 !important; }
          h2 { font-size: 28px !important; }
          p { font-size: 14px !important; }
          .af-d { line-height: 1.05 !important; }
          .af-fl, .af-fl2 { display: none; }
          h1 { word-break: break-word; }
          form { gap: 12px; }
          input, textarea { font-size: 13px !important; padding: 12px !important; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
}

export default function App() {
  const [status, setStatus] = useState('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState(null);

  useFonts();

  const handleRequestQuote = (prod) => {
    setQuoteModalProduct(prod || PRODUCTS[0]);
    setQuoteModalOpen(true);
  };

  const handleSuccess = () => {
    setStatus('success');
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <BrowserRouter>
      <div className="af" style={{ background: '#FFFFFF', color: '#1E293B', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ScrollToTop />
        <Navbar onRequestQuote={() => handleRequestQuote(PRODUCTS[0])} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products onRequestQuote={handleRequestQuote} />} />
            <Route path="/products/:id" element={<ProductDetail onRequestQuote={handleRequestQuote} />} />
            <Route path="/contact" element={<Contact onSuccess={handleSuccess} />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* ══ QUOTATION POPUP MODAL ═════════════════════════════════ */}
        <QuoteModal
          product={quoteModalProduct}
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          onSuccess={() => {
            setQuoteModalOpen(false);
            handleSuccess();
          }}
        />

        {/* ══ SUCCESS STATUS MODAL ══════════════════════════════════ */}
        {status === 'success' && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(11, 27, 61, 0.45)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 99999,
            }}
          >
            <div
              style={{
                width: '90%',
                maxWidth: 420,
                background: '#FFFFFF',
                border: '1px solid #DCE9FA',
                borderRadius: 20,
                padding: '36px 30px',
                textAlign: 'center',
                boxShadow: '0 25px 70px rgba(23,78,166,0.18)',
                animation: 'popIn .35s ease',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  margin: '0 auto 18px',
                  borderRadius: '50%',
                  background: '#DCE9FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #B8D5FA',
                }}
              >
                <CheckCircle size={36} color="#174EA6" />
              </div>

              <h2 className="af-d" style={{ color: '#0B1B3D', fontSize: 22, marginBottom: 10, fontWeight: 700 }}>
                Message Sent Successfully
              </h2>

              <p
                style={{
                  color: '#475569',
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                Thank you for reaching out. We will respond promptly.
              </p>

              <button
                onClick={() => setStatus('')}
                style={{
                  background: '#174EA6',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(23,78,166,0.25)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#0D3880')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#174EA6')}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* ══ STICKY WHATSAPP BUTTON ═══════════════════════════ */}
        <a
          href="https://wa.me/+8619868505216"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textDecoration: 'none',
            zIndex: 9999,
            boxShadow: '0 10px 30px rgba(37,211,102,0.4)',
            transition: 'all .3s ease',
            animation: 'whatsappPulse 2s infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
    </BrowserRouter>
  );
}