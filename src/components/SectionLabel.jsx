export default function SectionLabel({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span style={{ display: 'block', width: 28, height: 2, background: '#174EA6', borderRadius: 2, flexShrink: 0 }} />
      <span style={{ color: '#174EA6', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 11 }}>
        {children}
      </span>
    </div>
  );
}
