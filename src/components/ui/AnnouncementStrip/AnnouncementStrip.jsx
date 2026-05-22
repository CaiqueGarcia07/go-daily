import './AnnouncementStrip.css';

const ITEMS = [
  '🔥 FRETE GRÁTIS acima de R$199',
  'Whey Gummy — 4 sabores incríveis',
  '10% OFF na 1ª compra → código GO10',
  'ZERO GLÚTEN · ZERO AÇÚCAR · 12g de Proteína',
  '📦 800g · 40 porções por pote',
  '⭐ 4.9 — +1.100 avaliações verificadas',
];

export default function AnnouncementStrip() {
  return (
    <div className="strip">
      <div className="strip-track">
        {[0, 1].map((pass) => (
          <div className="strip-item" key={pass} aria-hidden={pass === 1 || undefined}>
            {ITEMS.map((item, i) => (
              <span key={i}>
                {item}
                {i < ITEMS.length - 1 && <span className="strip-dot" />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
