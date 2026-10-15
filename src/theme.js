// Theme definitions for Royal Blue + White corporate industrial theme
export const C = {
  // Backgrounds
  white: '#FFFFFF',
  bg0: '#FFFFFF', // Primary background (Pure White)
  bg1: '#E9EEF5', // Subtle section background (Cool Grey)
  bg2: '#F5F9FF', // Very light blue tint
  card: '#FFFFFF', // Card surface
  cardAlt: '#F8FAFC', // Secondary card surface

  // Royal Blue Palette
  royal: '#174EA6', // Primary Royal Blue
  royalDark: '#0D3880', // Darker royal blue
  royalHover: '#134394', // Hover royal blue
  royalLight: '#2563EB', // Bright royal accent
  royalDim: 'rgba(23, 78, 166, 0.08)',
  royalBorder: 'rgba(23, 78, 166, 0.20)',

  // Powder Blue & Cool Grey Highlights
  powder: '#DCE9FA', // Powder Blue for highlights & badges
  powderLight: '#EEF5FD',
  coolGrey: '#E9EEF5', // Cool Grey section background
  border: '#E2E8F0', // Light clean border
  borderDark: '#CBD5E1',

  // Typography Colors
  textDark: '#0B1B3D', // Deep corporate dark blue for headings
  textBody: '#334155', // Slate body text for excellent readability
  textMuted: '#64748B', // Muted secondary text
  textSubtle: '#94A3B8', // Subtle captions & borders

  // Backward compatibility aliases
  gold: '#174EA6', // Aliased to Royal Blue to maintain compatibility
  goldDark: '#0D3880',
  goldLight: '#2563EB',
  goldDim: 'rgba(23, 78, 166, 0.08)',
  goldBorder: 'rgba(23, 78, 166, 0.20)',
  primaryRed: '#174EA6', // Replaced with Royal Blue (no red anywhere)

  g1: '#334155',
  g2: '#475569',
  g3: '#64748B',
};

export const noiseStyle = {
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  pointerEvents: 'none',
  opacity: 0.015,
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundSize: '180px',
};

export const labelStyle = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  color: '#1E293B',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 8,
};

export const buttonStyle = {
  width: '100%',
  background: '#174EA6',
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: 14,
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

export const inputStyle = {
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
