import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { FLAVORS, ACCORDION_ITEMS } from '../../../data/products';
import FlavorPicker from './FlavorPicker';
import NutritionMini from './NutritionMini';
import Accordion from './Accordion';
import './ProductDetail.css';

const THUMBS = [
  { emoji: '🍬', label: 'Principal' },
  { emoji: '📦', label: 'Pote' },
  { emoji: '💊', label: 'Detalhe' },
  { emoji: '🏋️', label: 'Uso' },
];

export default function ProductDetail({ onToast }) {
  const { addItem } = useCart();
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleAdd() {
    addItem({ id: `detail-${flavor.id}`, name: 'Whey Gummy', flavor: flavor.label, price: 149.9, qty });
    onToast?.(`Whey Gummy — ${flavor.label}`);
  }

  return (
    <section className="section section--dark" id="produto">
      <div className="container">
        <div className="product-detail">
          <div className="product-gallery">
            <div className="product-gallery__main">
              <div className="product-gallery__main-img">
                <span style={{ fontSize: 120 }}>{THUMBS[activeThumb].emoji}</span>
                <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 8 }}>
                  {flavor.emoji} {flavor.label}
                </div>
              </div>
            </div>
            <div className="product-gallery__thumbs">
              {THUMBS.map((t, i) => (
                <div
                  key={i}
                  className={`thumb${activeThumb === i ? ' active' : ''}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <span style={{ fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    {t.emoji}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-info__cat">Go!Daily · Whey Gummy</div>
            <h1 className="product-info__title">
              Whey Gummy<br />
              <span>{flavor.label}</span>
            </h1>
            <div className="product-info__rating">
              <span className="stars">★★★★★</span>
              <span>4.9</span>
              <a href="#avaliacoes">(312 avaliações)</a>
              <span style={{ marginLeft: 4, fontSize: 11, color: '#2ecc71', fontWeight: 600 }}>✓ Compra verificada</span>
            </div>

            <FlavorPicker active={flavor} onChange={setFlavor} />

            <div className="price-block">
              <div className="price-block__main">
                <span className="badge badge--yellow">-21%</span>
                <div className="price-block__current">R$ 149,90</div>
                <div className="price-block__old">R$ 189,90</div>
              </div>
              <div className="price-block__installments">
                ou 3× de R$ 49,97 sem juros no cartão
              </div>
              <div className="price-block__pix">💸 R$ 134,91 no Pix (10% off)</div>
            </div>

            <NutritionMini />

            <div className="add-block">
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span className="qty-num">{qty}</span>
                <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <button className="add-to-cart" onClick={handleAdd}>
                🛒 Adicionar ao carrinho
              </button>
              <button
                className={`wishlist-btn${liked ? ' liked' : ''}`}
                onClick={() => setLiked((v) => !v)}
                aria-label="Favoritar"
              >
                {liked ? '♥' : '♡'}
              </button>
            </div>

            <div className="shipping-info">
              🚚{' '}
              <strong>Frete grátis</strong> acima de R$ 199 · Entrega em até 72h
            </div>

            <Accordion items={ACCORDION_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
