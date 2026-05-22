import { useEffect, useRef } from 'react';
import { REVIEWS, RATING_BARS } from '../../../data/products';
import './Reviews.css';

export default function Reviews() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          el.querySelectorAll('.rating-bar-fill').forEach((bar) => {
            bar.style.width = bar.dataset.pct + '%';
          });
        }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('[data-animate]').forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="avaliacoes" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <span className="eyebrow eyebrow--yellow">⭐ AVALIAÇÕES</span>
            <h2 className="section-title">
              O que nossos <em>clientes dizem</em>
            </h2>
          </div>
        </div>

        <div className="rating-summary">
          <div className="rating-big">
            <div className="rating-big__num">4.9</div>
            <div className="stars">★★★★★</div>
            <div className="rating-big__count">+1.100 avaliações</div>
          </div>
          <div className="rating-bars">
            {RATING_BARS.map((row) => (
              <div className="rating-bar-row" key={row.stars}>
                <span className="rating-bar-label">{row.stars}</span>
                <div className="rating-bar-track">
                  <div
                    className="rating-bar-fill"
                    data-pct={row.pct}
                    style={{ width: 0 }}
                  />
                </div>
                <span className="rating-bar-count">{row.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <ReviewCard
              key={r.id}
              review={r}
              delay={i > 0 ? String(i) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, delay }) {
  return (
    <div
      className="review-card"
      data-animate
      {...(delay ? { 'data-delay': delay } : {})}
    >
      <div className="review-header">
        <div className="review-avatar">{review.avatar}</div>
        <div className="review-meta">
          <div className="review-name">{review.name}</div>
          <div className="review-date">{review.date}</div>
        </div>
        <span className="review-verified">✓ Verificado</span>
      </div>
      <div className="review-stars">
        {'★'.repeat(review.rating).split('').map((s, i) => (
          <span key={i} className="review-star">{s}</span>
        ))}
      </div>
      <span className="review-flavor">
        {review.flavorEmoji} {review.flavor}
      </span>
      <div className="review-text">{review.text}</div>
      <div className="review-helpful">
        <span>Útil?</span>
        <button>👍 {review.helpful}</button>
      </div>
    </div>
  );
}
