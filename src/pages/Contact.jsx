import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { noiseStyle, labelStyle, inputStyle, buttonStyle } from '../theme.js';
import SectionLabel from '../components/SectionLabel.jsx';

export default function Contact({ onSuccess }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formspree.io/f/xkoazqov', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        onSuccess();
        e.target.reset();
      } else {
        onSuccess();
        e.target.reset();
      }
    } catch {
      onSuccess();
      e.target.reset();
    }
  };

  return (
    <div style={{ background: '#FFFFFF', color: '#1E293B', minHeight: '80vh', paddingTop: 'clamp(110px, 16vw, 140px)', paddingBottom: '90px' }}>
      <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={noiseStyle} />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: 580,
            height: 580,
            borderRadius: '50%',
            background: 'rgba(220, 233, 250, 0.5)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 60 }}>
            {/* Info panel */}
            <div>
              <SectionLabel>Get In Touch</SectionLabel>
              <h1
                className="af-d"
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  color: '#0B1B3D',
                  lineHeight: 1.12,
                  fontWeight: 700,
                  marginBottom: 32,
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to Start<br />Your <span style={{ color: '#174EA6' }}>Project?</span>
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 34 }}>
                {[
                  {
                    Icon: MapPin,
                    title: 'Head Office',
                    lines: ['UNIT 8, 7/F, BLOCK S-T, VALIANT INDUSTRIAL CENTRE 2-12 AU PUI WAN STREET, FO TAN Hong Kong'],
                  },
                  {
                    Icon: MapPin,
                    title: 'Corporate Office',
                    lines: ['UNIT 8, 7/F, BLOCK S-T, VALIANT INDUSTRIAL CENTRE 2-12 AU PUI WAN STREET, FO TAN Hong Kong'],
                  },
                  { Icon: Phone, title: 'Direct Contact', lines: ['+86 198 6850 5216', '+852 9290 2924'] },
                  {
                    Icon: Mail,
                    title: 'Email Us',
                    lines: ['info@4siblingsinternational.com', 'sales@4siblingsinternational.com'],
                  },
                  { Icon: Clock, title: 'Business Hours', lines: ['Mon – Fri: 9:00 AM – 5:00 PM', 'Saturday and Sunday: Closed'] },
                ].map(({ Icon, title, lines }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: '#DCE9FA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                        border: '1px solid #B8D5FA',
                      }}
                    >
                      <Icon size={18} color="#174EA6" />
                    </div>
                    <div>
                      <div className="af-d" style={{ fontSize: 14, color: '#0B1B3D', marginBottom: 4, fontWeight: 700 }}>
                        {title}
                      </div>
                      {lines.map((l, j) => (
                        <div key={j} style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, fontWeight: 400 }}>
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
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
                      width: 40,
                      height: 40,
                      borderRadius: 10,
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
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(23,78,166,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                      e.currentTarget.style.color = '#174EA6';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form card */}
            <div>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #DCE9FA',
                  borderRadius: 22,
                  padding: '38px 34px',
                  boxShadow: '0 20px 60px rgba(23,78,166,0.08), 0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <h3 className="af-d" style={{ fontSize: 22, color: '#0B1B3D', marginBottom: 20, fontWeight: 700 }}>
                  Send us a Message
                </h3>

                {/* FORM START */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* First + Last Name */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: 16,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#174EA6';
                          e.target.style.boxShadow = '0 0 0 3px rgba(23,78,166,0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#174EA6';
                          e.target.style.boxShadow = '0 0 0 3px rgba(23,78,166,0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#174EA6';
                          e.target.style.boxShadow = '0 0 0 3px rgba(23,78,166,0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#174EA6';
                          e.target.style.boxShadow = '0 0 0 3px rgba(23,78,166,0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <textarea
                      name="subject"
                      rows={1}
                      required
                      placeholder="Enter Your Subject"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#174EA6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(23,78,166,0.12)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#CBD5E1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#174EA6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(23,78,166,0.12)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#CBD5E1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0D3880';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#174EA6';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
