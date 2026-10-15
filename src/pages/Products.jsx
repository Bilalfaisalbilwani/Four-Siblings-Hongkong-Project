import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { noiseStyle } from '../theme.js';
import SectionLabel from '../components/SectionLabel.jsx';

export default function Products({ onRequestQuote }) {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#FFFFFF', color: '#1E293B', minHeight: '80vh', paddingTop: 'clamp(110px, 16vw, 140px)', paddingBottom: '90px' }}>
      <section id="products" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={noiseStyle} />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translateX(-50%)',
            width: '80%',
            height: '240px',
            background: 'radial-gradient(ellipse at top, rgba(220, 233, 250, 0.45), transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 54 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionLabel>Products Catalog</SectionLabel>
            </div>
            <h1
              className="af-d"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                color: '#0B1B3D',
                marginBottom: 14,
                fontWeight: 700,
                letterSpacing: '-0.025em',
              }}
            >
              Our Core <span style={{ color: '#174EA6' }}>Products</span>
            </h1>
            <p style={{ color: '#64748B', fontSize: 15, maxWidth: 540, margin: '0 auto' }}>
              Premium grade industrial raw materials sourced from certified global producers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))',
              gap: 24,
              alignItems: 'stretch',
            }}
          >
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigate(`/products/${prod.id}`)}
                style={{
                  background: '#FFFFFF',
                  height: '100%',
                  minHeight: 520,
                  border: '1px solid #E2E8F0',
                  borderRadius: 18,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all .35s ease',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#174EA6';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(23, 78, 166, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Product Image Box */}
                <div
                  style={{
                    position: 'relative',
                    height: 250,
                    overflow: 'hidden',
                    background: '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 16,
                  }}
                >
                  <img
                    src={prod.img}
                    alt={prod.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: 'transform .6s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Product Info */}
                <div style={{ padding: '24px 24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="af-d" style={{ fontSize: 19, color: '#0B1B3D', marginBottom: 12, fontWeight: 700 }}>
                    {prod.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13.5,
                      color: '#475569',
                      lineHeight: 1.7,
                      flexGrow: 1,
                      marginBottom: 20,
                      display: '-webkit-box',
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {prod.desc}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestQuote(prod);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: '#174EA6',
                      fontSize: 11.5,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      transition: 'gap .2s',
                      marginTop: 'auto',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                  >
                    Request Quote <ChevronRight size={14} color="#174EA6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
