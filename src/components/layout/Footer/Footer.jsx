import { FOOTER_COLS } from '../../../data/products';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">Go!Daily</a>
            <p className="footer-tagline">
              Nutrição esportiva que cabe no seu bolso e na sua rotina.
            </p>
            <div className="footer-socials">
              <button className="social-btn" aria-label="Instagram">📷</button>
              <button className="social-btn" aria-label="TikTok">🎵</button>
              <button className="social-btn" aria-label="YouTube">▶️</button>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="footer-col" key={col.title}>
              <div className="footer-col__title">{col.title}</div>
              {col.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 Go!Daily · CNPJ 65.632.412/0001-91
          </span>
          <div className="footer-payments">
            {['Visa', 'Master', 'Pix', 'Boleto', 'AmEx'].map((p) => (
              <span key={p} className="payment-icon">{p}</span>
            ))}
          </div>
          <div className="footer-legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
