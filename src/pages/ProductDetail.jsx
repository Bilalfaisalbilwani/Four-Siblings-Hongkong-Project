import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';

export default function ProductDetail({ onRequestQuote }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ background: '#FFFFFF', color: '#1E293B', minHeight: '80vh', paddingTop: '160px', textAlign: 'center', paddingBottom: '80px' }}>
        <h2 className="af-d" style={{ fontSize: 28, marginBottom: 16, color: '#0B1B3D' }}>Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          style={{
            background: '#174EA6',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 26px',
            borderRadius: 12,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(23, 78, 166, 0.25)',
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div style={{ background: '#FFFFFF', color: '#1E293B', minHeight: '80vh', paddingTop: 'clamp(110px, 15vw, 140px)', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 4vw, 28px)' }}>

        {/* Back button */}
        <div style={{ marginBottom: 32 }}>
          <button
            onClick={() => navigate('/products')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#FFFFFF',
              border: '1px solid #CBD5E1',
              color: '#1E293B',
              padding: '10px 20px',
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all .25s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#174EA6';
              e.currentTarget.style.color = '#174EA6';
              e.currentTarget.style.background = '#EEF5FD';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#CBD5E1';
              e.currentTarget.style.color = '#1E293B';
              e.currentTarget.style.background = '#FFFFFF';
            }}
          >
            <ArrowLeft size={16} /> Back to Products
          </button>
        </div>

        {/* Product Details Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            marginBottom: 80,
          }}
        >
          {/* Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              height: 'clamp(300px, 40vw, 440px)',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(23, 78, 166, 0.06)',
            }}
          >
            <img
              src={product.img}
              alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>

          {/* Text & Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              style={{
                display: 'inline-block',
                background: '#DCE9FA',
                color: '#174EA6',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                borderRadius: 999,
                marginBottom: 14,
              }}
            >
              Industrial Specification
            </div>

            <h1
              className="af-d"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.12,
                color: '#0B1B3D',
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                fontSize: 16.5,
                color: '#334155',
                lineHeight: 1.8,
                marginBottom: 34,
                fontWeight: 400,
              }}
            >
              {product.desc}
            </p>

            <button
              onClick={() => onRequestQuote(product)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#174EA6',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 15,
                padding: '16px 34px',
                borderRadius: 14,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 28px rgba(23, 78, 166, 0.28)',
                transition: 'all .25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0D3880';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(23, 78, 166, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#174EA6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(23, 78, 166, 0.28)';
              }}
            >
              Request a Quotation <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Other Products Section */}
        <section style={{ borderTop: '1px solid #E2E8F0', paddingTop: 60 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2
              className="af-d"
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#0B1B3D',
                fontWeight: 700,
                marginBottom: 10,
                letterSpacing: '-0.02em',
              }}
            >
              Other <span style={{ color: '#174EA6' }}>Products</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: 14.5 }}>Explore our complementary industrial raw material offerings</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 22,
              alignItems: 'stretch',
            }}
          >
            {otherProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigate(`/products/${prod.id}`)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 18,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all .35s ease',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#174EA6';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(23, 78, 166, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ position: 'relative', height: 210, overflow: 'hidden', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={prod.img}
                    alt={prod.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="af-d" style={{ fontSize: 18, color: '#0B1B3D', marginBottom: 10, fontWeight: 700 }}>
                    {prod.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: '#475569',
                      lineHeight: 1.7,
                      flexGrow: 1,
                      marginBottom: 18,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {prod.desc}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: '#174EA6',
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      marginTop: 'auto',
                    }}
                  >
                    Request Quote <ChevronRight size={13} color="#174EA6" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
