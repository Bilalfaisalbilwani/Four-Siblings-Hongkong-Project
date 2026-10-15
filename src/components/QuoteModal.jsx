import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const labelStyle = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  color: '#1E293B',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 8,
};

const inputStyle = {
  width: '100%',
  background: '#FFFFFF',
  border: '1px solid #CBD5E1',
  borderRadius: 12,
  padding: '14px 16px',
  color: '#0F172A',
  fontSize: 14,
  fontWeight: 500,
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'all .25s ease',
};

const buttonStyle = {
  width: '100%',
  background: '#174EA6',
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: 14.5,
  padding: '15px',
  borderRadius: 12,
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  boxShadow: '0 8px 24px rgba(23, 78, 166, 0.25)',
  transition: 'all .25s ease',
};

export default function QuoteModal({ product: _product, isOpen, onClose, onSuccess }) {
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubject('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formspree.io/f/xkoazqov', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        onSuccess();
        onClose();
      } else {
        onSuccess();
        onClose();
      }
    } catch {
      onSuccess();
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(11, 27, 61, 0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        style={{
          width: '100%',
          maxWidth: 580,
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#FFFFFF',
          border: '1px solid #DCE9FA',
          borderRadius: 22,
          padding: '36px 32px',
          boxShadow: '0 30px 90px rgba(23, 78, 166, 0.2)',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 36,
            height: 36,
            borderRadius: 10,
            background: '#EEF5FD',
            border: '1px solid #DCE9FA',
            color: '#174EA6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all .2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#DCE9FA';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#EEF5FD';
          }}
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: 22 }}>
          <div
            style={{
              display: 'inline-block',
              background: '#DCE9FA',
              color: '#174EA6',
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: 999,
              marginBottom: 10,
            }}
          >
            Quotation Request
          </div>
          <h3 className="af-d" style={{ fontSize: 24, color: '#0B1B3D', fontWeight: 700 }}>
            Send us a Message
          </h3>
        </div>

        {/* Form */}
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
            <input
              type="text"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter Your Subject"
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

          {/* Message */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="How can we help you?"
              style={{ ...inputStyle, resize: 'vertical' }}
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
      </motion.div>
    </div>
  );
}
