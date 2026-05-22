import { useState } from 'react';
import { FLAVORS } from '../../../data/products';
import './PromoBanner.css';

export default function PromoBanner() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="promo-banner" id="promo">
      <div className="promo-inner">
        <div className="promo-left">
          <div className="promo-tag">🔥 OFERTA ESPECIAL</div>
          <h2 className="promo-title">
            Kit Whey Gummy<br />4 Sabores
          </h2>
          <p className="promo-sub">
            Leve todos os 4 sabores com desconto exclusivo. Caramelo Salgado,
            Frutas Vermelhas, Morango e Maçã Verde — uma coleção completa.
          </p>
          <div className="promo-flavor-dots">
            {FLAVORS.map((f, i) => (
              <div
                key={f.id}
                className="promo-dot"
                style={{ background: f.color }}
                onClick={() => setActiveDot(i)}
                title={f.label}
              />
            ))}
          </div>
        </div>

        <div className="promo-right">
          <div className="promo-price">
            <small>4 potes por</small>
            <br />
            R$499,90
          </div>
          <div className="promo-saving">Economize R$ 259,70 no kit</div>
          <a href="#produto" className="btn btn--primary btn--lg">
            Quero o Kit Completo →
          </a>
        </div>
      </div>
    </section>
  );
}
