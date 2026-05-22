import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="newsletter">
          <h2 className="newsletter__title">
            Receba ofertas <span>exclusivas</span>
          </h2>
          <p className="newsletter__sub">
            Assine e ganhe 10% OFF na primeira compra. Novidades, lançamentos e
            conteúdos sobre nutrição esportiva.
          </p>

          {sent ? (
            <div style={{ color: '#2ecc71', fontWeight: 700, fontSize: 16 }}>
              ✅ Inscrição confirmada! Verifique seu e-mail.
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--primary">
                Quero 10% OFF →
              </button>
            </form>
          )}

          <p className="newsletter__disclaimer">
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}
