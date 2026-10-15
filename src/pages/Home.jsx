import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Globe } from 'lucide-react';
import bgimg1 from '../assets/bgimg1.png';

const ease = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.1]);

  return (
    <div style={{ background: '#090A0F', color: '#FFFFFF', overflowX: 'hidden' }}>
      {/* ══ HERO SECTION WITH LUXURY GOLD & DARK THEME ════════════════════ */}
      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#040508',
        }}
      >
        {/* Background Image Layer (Fully vivid with luxury gold & charcoal vignette gradient) */}
        <motion.div style={{ position: 'absolute', inset: 0, zIndex: 1, y: heroY }}>
          <img
            src={bgimg1}
            alt="Industrial raw materials trading"
            style={{
              width: '100%',
              height: '112%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              opacity: 0.65,
            }}
          />
          {/* Luxury dark charcoal & golden warm vignette overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(4,5,8,0.95) 0%, rgba(10,12,18,0.85) 50%, rgba(212,175,55,0.12) 100%)',
            }}
          />
          {/* Subtle warm ambient gold glow */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)',
              filter: 'blur(90px)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(120px, 16vw, 170px) 24px 80px',
            width: '100%',
            opacity: heroOpacity,
          }}
        >
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* Top Badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  borderRadius: 999,
                  padding: '7px 18px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37' }} />
                <span
                  style={{
                    color: '#F3E5AB',
                    fontSize: 12,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  International Trading of Industrial Raw Materials
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="af-d"
              style={{
                fontSize: 'clamp(44px,7.5vw,94px)',
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                margin: '0 0 24px',
                maxWidth: 920,
                color: '#FFFFFF',
                fontWeight: 700,
                textShadow: '0 12px 35px rgba(0,0,0,0.7)',
              }}
            >
              <div>Worldwide</div>
              <span
                style={{
                  color: '#FCCD34',
                  display: 'inline-block',
                  textShadow: '0 10px 30px rgba(252,205,52,0.3)',
                }}
              >
                Supply Solutions.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.75,
                maxWidth: 580,
                borderLeft: '3px solid #FCCD34',
                paddingLeft: 20,
                margin: '0 0 36px',
                fontWeight: 400,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              We are a leading international supplier of high-quality industrial raw materials serving multiple industries across global markets. With a strong supply network, strict quality standards, and efficient logistics, we help businesses secure reliable materials at competitive prices.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#FCCD34',
                  color: '#000000',
                  fontWeight: 800,
                  fontSize: 15,
                  padding: '15px 34px',
                  borderRadius: 14,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(252, 205, 52, 0.35)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e5b828';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FCCD34';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Products <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '14px 32px',
                  borderRadius: 14,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Request Consultation
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          >
            <div style={{ width: 1.5, height: 34, background: 'linear-gradient(to bottom, transparent, #FCCD34)' }} />
            <span style={{ fontSize: 9.5, letterSpacing: '0.2em', color: '#FCCD34', textTransform: 'uppercase', fontWeight: 700 }}>
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          overflow: 'hidden',
          background: '#040508',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.22,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(4,5,8,0.94) 0%, rgba(10,12,18,0.9) 100%)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 840, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: 999,
                padding: '7px 18px',
                marginBottom: 22,
                backdropFilter: 'blur(8px)',
              }}
            >
              <Globe size={14} color="#FCCD34" />
              <span style={{ color: '#FCCD34', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
                Custom Solutions Available
              </span>
            </div>

            <h2
              className="af-d"
              style={{
                fontSize: 'clamp(28px,5vw,56px)',
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: 20,
                fontWeight: 700,
                letterSpacing: '-0.025em',
              }}
            >
              Need a Custom <span style={{ color: '#FCCD34' }}>Solution?</span>
            </h2>

            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.75)',
                maxWidth: 580,
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              Our team works closely with global manufacturers and suppliers to source tailored raw materials matching your technical specifications.
            </p>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#FCCD34',
                color: '#000000',
                fontWeight: 800,
                padding: '15px 32px',
                fontSize: 14.5,
                borderRadius: 14,
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(252,205,52,0.35)',
                transition: 'all .25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5b828';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FCCD34';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={17} /> Contact Us Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
