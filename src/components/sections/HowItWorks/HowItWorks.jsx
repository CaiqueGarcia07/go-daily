import { useEffect, useRef } from 'react';
import { HOW_STEPS } from '../../../data/products';
import './HowItWorks.css';

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    el.querySelectorAll('[data-animate]').forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section section--dark" id="como-funciona" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <span className="eyebrow eyebrow--yellow">❓ COMO FUNCIONA</span>
            <h2 className="section-title">
              Simples assim — <em>em 4 passos</em>
            </h2>
          </div>
        </div>

        <div className="how-grid">
          {HOW_STEPS.map((step, i) => (
            <div
              className="how-card"
              key={step.step}
              data-animate
              {...(i > 0 ? { 'data-delay': String(i) } : {})}
            >
              <span className="how-card__step">{step.step}</span>
              <div className="how-card__icon">{step.icon}</div>
              <div className="how-card__title">{step.title}</div>
              <div className="how-card__desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
