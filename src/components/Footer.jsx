import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { PRODUCTS } from '../data/products.js';

export default function Footer() {
  return (
    <footer style={{ background: '#E9EEF5', borderTop: '1px solid #DCE9FA', padding: '72px 0 28px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 48, marginBottom: 52 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: '#FFFFFF',
                  border: '1px solid #DCE9FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: 4,
                  boxShadow: '0 2px 8px rgba(23,78,166,0.06)',
                }}
              >
                <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <div className="af-d" style={{ fontSize: 15, fontWeight: 700, color: '#0B1B3D', lineHeight: 1.2 }}>
                  FourSiblings
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#174EA6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  International Ltd.
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, marginBottom: 20, fontWeight: 400 }}>
              Exporter of Industrial Raw Material serving international manufacturers and enterprises worldwide.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { Icon: FaFacebook, link: '#' },
                { Icon: FaInstagram, link: '#' },
                { Icon: FaLinkedin, link: '#' },
                { Icon: FaWhatsapp, link: 'https://wa.me/+8619868505216' },
              ].map(({ Icon, link }, j) => (
                <a
                  key={j}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#174EA6',
                    textDecoration: 'none',
                    transition: 'all .25s ease',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#174EA6';
                    e.currentTarget.style.background = '#EEF5FD';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(23,78,166,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.color = '#174EA6';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="af-d" style={{ fontSize: 12, color: '#0B1B3D', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 18, fontWeight: 700 }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Product Catalog', path: '/products' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    color: '#475569',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all .2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#174EA6';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <ChevronRight size={13} color="#174EA6" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="af-d" style={{ fontSize: 12, color: '#0B1B3D', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 18, fontWeight: 700 }}>
              Products
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {PRODUCTS.map((prod) => (
                <Link
                  key={prod.title}
                  to={`/products/${prod.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    color: '#475569',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all .2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#174EA6';
                    e.currentTarget.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <ChevronRight size={13} color="#174EA6" />
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="af-d" style={{ fontSize: 12, color: '#0B1B3D', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 18, fontWeight: 700 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { Icon: MapPin, text: 'UNIT 8, 7/F, BLOCK S-T, VALIANT INDUSTRIAL CENTRE 2-12 AU PUI WAN STREET, FO TAN Hong Kong' },
                { Icon: MapPin, text: 'No. 8, Qi Changcheng Road, Huangdao District, Qingdao City, Shandong Province, China' },
                { Icon: Phone, text: '+86 198 6850 5216 \n +852 9290 2924' },
                { Icon: Mail, text: 'info@4siblingsinternational.com \n sales@4siblingsinternational.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Icon size={14} color="#174EA6" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #DCE9FA',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 14,
          }}
        >
          <p style={{ fontSize: 12, color: '#64748B', fontWeight: 400 }}>
            © {new Date().getFullYear()} 4Siblings Pvt Ltd. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms & Conditions'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: 12, color: '#64748B', textDecoration: 'none', transition: 'color .2s', fontWeight: 400 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#174EA6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
