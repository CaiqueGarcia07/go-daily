import { useEffect, useRef, useState } from 'react';
import { PRODUCTS } from '../../../data/products';
import CategoryBar from '../CategoryBar/CategoryBar';
import ProductCard from './ProductCard';
import './Catalog.css';

export default function Catalog({ onToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const gridRef = useRef(null);

  const filtered =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    grid.querySelectorAll('[data-animate]').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <>
      <CategoryBar active={activeCategory} onSelect={setActiveCategory} />
      <section className="section" id="catalogo">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <span className="eyebrow eyebrow--yellow">⚡ NOSSOS PRODUTOS</span>
              <h2 className="section-title">
                Escolha seu <em>sabor favorito</em>
              </h2>
            </div>
            <a href="#promo" className="btn btn--outline">
              Ver kit completo →
            </a>
          </div>

          <div className="catalog-grid" id="productGrid" ref={gridRef}>
            {filtered.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                onToast={onToast}
                delay={i > 0 ? String(i) : undefined}
              />
            ))}
            {filtered.length === 0 && (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--muted)', padding: '48px 0' }}>
                Nenhum produto nesta categoria ainda.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
