import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ onRequestQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [screen, setScreen] = useState({
    mobile: false,
    tablet: false,
  });

  const location = useLocation();

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setScreen({
        mobile: w < 768,
        tablet: w <= 1024,
      });
      if (w > 1024) {
        setMobileOpen(false);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        padding: screen.mobile ? '8px 12px' : '16px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          height: screen.mobile ? 72 : 88,
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(245, 249, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid #DCE9FA',
          borderRadius: 20,
          padding: screen.mobile ? '0 14px' : '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled
            ? '0 10px 35px rgba(23, 78, 166, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04)'
            : '0 6px 25px rgba(23, 78, 166, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
          transition: 'all .3s ease',
          position: 'relative',
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: screen.mobile ? 8 : 14,
            textDecoration: 'none',
            minWidth: 0,
          }}
        >
          <img
            src={logo}
            alt="FourSiblings International"
            style={{
              width: screen.mobile ? 54 : screen.tablet ? 70 : 88,
              height: screen.mobile ? 54 : screen.tablet ? 70 : 88,
              objectFit: 'contain',
              transition: 'all .3s ease',
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0 }}>
            <div
              className="af-d"
              style={{
                fontSize: screen.mobile ? 12 : screen.tablet ? 15 : 19,
                color: '#0B1B3D',
                lineHeight: 1.2,
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: screen.mobile ? 165 : screen.tablet ? 240 : '100%',
              }}
            >
              FourSiblings International Ltd. Hong Kong
            </div>
            <div
              style={{
                fontSize: screen.mobile ? 8.5 : 11,
                color: '#174EA6',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginTop: 2,
              }}
            >
              Importer & Exporter
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="af-dnav"
          style={{
            display: screen.tablet ? 'none' : 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive ? '#174EA6' : '#1E293B',
                  textDecoration: 'none',
                  fontSize: 14.5,
                  fontWeight: isActive ? 700 : 600,
                  transition: 'all .25s ease',
                  position: 'relative',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#174EA6')}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#1E293B';
                }}
              >
                {item.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: 2.5,
                      background: '#174EA6',
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CTA */}
        <div
          className="af-dcta"
          style={{
            display: screen.tablet ? 'none' : 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <a
            href="tel:+8619868505216"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: '#1E293B',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              padding: '8px 12px',
              borderRadius: 10,
              transition: 'all .25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#EEF5FD';
              e.currentTarget.style.color = '#174EA6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1E293B';
            }}
          >
            <Phone size={15} color="#174EA6" />
            +86 198 6850 5216
          </a>

          <button
            onClick={() => onRequestQuote()}
            style={{
              background: '#174EA6',
              color: '#FFFFFF',
              padding: '12px 22px',
              borderRadius: 12,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 13.5,
              boxShadow: '0 6px 20px rgba(23, 78, 166, 0.25)',
              transition: 'all .25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0D3880';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#174EA6';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get Quote
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="af-hmbg"
          style={{
            display: screen.tablet ? 'flex' : 'none',
            background: '#EEF5FD',
            border: '1px solid #DCE9FA',
            borderRadius: 10,
            padding: 8,
            cursor: 'pointer',
            color: '#174EA6',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10001,
            transition: 'all .2s ease',
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className="af-mmenu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            width: '100%',
            background: '#FFFFFF',
            border: '1px solid #DCE9FA',
            borderRadius: 18,
            overflow: 'hidden',
            maxHeight: mobileOpen ? 500 : 0,
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? 'auto' : 'none',
            transition: 'all .35s ease',
            boxShadow: '0 20px 50px rgba(23, 78, 166, 0.12)',
          }}
        >
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {NAV_LINKS.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: isActive ? '#174EA6' : '#1E293B',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: isActive ? 700 : 600,
                    borderBottom: '1px solid #F1F5F9',
                    paddingBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#174EA6' }} />
                  )}
                </Link>
              );
            })}

            <a
              href="tel:+8619868505216"
              style={{
                color: '#1E293B',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 4,
              }}
            >
              <Phone size={15} color="#174EA6" />
              +86 198 6850 5216
            </a>

            <button
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              style={{
                background: '#174EA6',
                color: '#FFFFFF',
                padding: '13px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: 14,
                marginTop: 6,
                boxShadow: '0 6px 20px rgba(23, 78, 166, 0.2)',
              }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
