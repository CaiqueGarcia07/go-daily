import { useState, useEffect, useRef } from 'react';
import { FLAVORS } from '../../../data/products';
import './Hero.css';

export default function Hero() {
  const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.querySelectorAll('[data-animate]').forEach((n) => n.classList.add('visible')); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero__bg-glow" />
      <div className="hero__inner">
        <div className="hero__left">
          <div className="badge badge--accent" data-animate>
            ⚡ LINHA WHEY GUMMY — 4 SABORES
          </div>
          <h1 className="hero__title" data-animate data-delay="1">
            Proteína em forma<br />de bala. Sério.<br />
            <span>Go!Daily Gummy.</span>
          </h1>
          <p className="hero__sub" data-animate data-delay="2">
            A bala de gelatina enriquecida com whey protein que você vai querer
            comer todo dia. 12g de proteína em apenas 4 balas. Zero glúten, zero
            açúcar, 100% sabor.
          </p>
          <div className="hero__pills" data-animate data-delay="2">
            <span className="attr-pill">💪 12g Proteína</span>
            <span className="attr-pill">🌾 Zero Glúten</span>
            <span className="attr-pill">🍬 Zero Açúcar</span>
            <span className="attr-pill">📦 800g · 40 porções</span>
          </div>
          <div className="hero__buttons" data-animate data-delay="3">
            <a href="#catalogo" className="btn btn--primary btn--lg">
              Ver todos os sabores →
            </a>
            <a href="#produto" className="btn btn--secondary btn--lg">
              Comprar agora
            </a>
          </div>
          <div className="hero__stats" data-animate data-delay="4">
            <div className="stat">
              <div className="stat__num">+50k</div>
              <div className="stat__label">Clientes ativos</div>
            </div>
            <div className="stat">
              <div className="stat__num">4.9★</div>
              <div className="stat__label">Avaliação média</div>
            </div>
            <div className="stat">
              <div className="stat__num">+1.1k</div>
              <div className="stat__label">Avaliações</div>
            </div>
          </div>
        </div>

        <div className="hero__visual" data-animate data-delay="2">
          <div className="hero__img-placeholder">
            <span>🍬</span>
            <span className="hero__img-flavor">{activeFlavor.emoji} {activeFlavor.label}</span>
          </div>

          <div className="hero__price-bubble">
            <span className="hero__price-label">a partir de</span>
            <span className="hero__price-value">R$ 149,90</span>
            <span className="hero__price-old">De R$ 189,90</span>
          </div>

          <div className="hero__flavor-dots">
            {FLAVORS.map((f) => (
              <div
                key={f.id}
                className={`hero__flavor-dot${activeFlavor.id === f.id ? ' active' : ''}`}
                style={{ background: f.color }}
                onClick={() => setActiveFlavor(f)}
                title={f.label}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero__flavor-dots-mobile">
        {FLAVORS.map((f) => (
          <div
            key={f.id}
            className={`hero__flavor-dot-m${activeFlavor.id === f.id ? ' active' : ''}`}
            style={{ background: f.color }}
            onClick={() => setActiveFlavor(f)}
            title={f.label}
          />
        ))}
      </div>
    </section>
  );
}
