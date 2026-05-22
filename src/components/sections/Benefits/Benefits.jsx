import { useEffect, useRef } from 'react';
import { BENEFITS } from '../../../data/products';
import './Benefits.css';

export default function Benefits() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('[data-animate]').forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="beneficios" ref={ref}>
      <div className="container">
        <div className="benefits-grid">
          <div className="benefits-img" data-animate>
            <div className="benefits-img-placeholder">
              <span>🍬</span>
              <span>Go!Daily</span>
              <span>Whey Gummy</span>
            </div>
          </div>

          <div>
            <div className="section-header-left" style={{ marginBottom: 32 }}>
              <span className="eyebrow eyebrow--yellow">💪 BENEFÍCIOS</span>
              <h2 className="section-title">
                Por que o <em>Go!Daily?</em>
              </h2>
            </div>
            <div className="benefits-list">
              {BENEFITS.map((b, i) => (
                <div
                  className="benefit-item"
                  key={b.title}
                  data-animate
                  data-delay={String(i + 1)}
                >
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <div className="benefit-title">{b.title}</div>
                    <div className="benefit-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
