import { motion } from 'framer-motion';
import bgimg2 from '../assets/bgimg2.jpeg';
import { noiseStyle } from '../theme.js';
import SectionLabel from '../components/SectionLabel.jsx';

export default function About() {
  return (
    <div style={{ background: '#FFFFFF', color: '#1E293B', minHeight: '80vh', paddingTop: 'clamp(110px, 16vw, 150px)', paddingBottom: '90px' }}>
      <section id="about" style={{ padding: '30px 0 70px', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={noiseStyle} />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '45%',
            height: '100%',
            background: 'linear-gradient(to left, rgba(220, 233, 250, 0.4), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'center' }}>
            {/* Facility image */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: -12,
                    background: 'linear-gradient(135deg, rgba(220, 233, 250, 0.7), rgba(245, 249, 255, 0.2))',
                    borderRadius: 24,
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: 18,
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    border: '1px solid #DCE9FA',
                    boxShadow: '0 20px 50px rgba(23, 78, 166, 0.1)',
                  }}
                >
                  <img
                    src={bgimg2}
                    alt="facility"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform .7s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 27, 61, 0.25), transparent 60%)',
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* About text */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>
              <SectionLabel>About Us</SectionLabel>
              <h1
                className="af-d"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  lineHeight: 1.1,
                  color: '#0B1B3D',
                  marginBottom: 24,
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                }}
              >
                About Our <br /><span style={{ color: '#174EA6' }}>Company.</span>
              </h1>
              <p style={{ fontSize: 16.5, color: '#334155', lineHeight: 1.85, marginBottom: 20, fontWeight: 400 }}>
                We are a Hong Kong-based trading company focused on the global import and export of industrial raw materials. with a focus on products export from China, the Middle East, and South Asia. Since 2026, we have been providing reliable sourcing and international trade solutions to businesses worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
