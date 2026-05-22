import './MobileNav.css';

export default function MobileNav({ open, onClose }) {
  return (
    <>
      <div
        className={`mobile-nav-overlay${open ? ' open' : ''}`}
        onClick={onClose}
      />
      <nav className={`mobile-nav${open ? ' open' : ''}`}>
        <div className="mobile-nav__header">
          <a href="#" className="header-logo" onClick={onClose}>
            <img src="/logo.svg" alt="Go!Daily" className="header-logo__img" />
          </a>
          <button className="mobile-nav__close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="mobile-nav__links">
          <a href="#" className="mobile-nav__link active" onClick={onClose}>
            🏠 Home
          </a>
          <a href="#catalogo" className="mobile-nav__link" onClick={onClose}>
            🍬 Produtos
          </a>
          <a href="#como-funciona" className="mobile-nav__link" onClick={onClose}>
            ❓ Como funciona
          </a>
          <a href="#beneficios" className="mobile-nav__link" onClick={onClose}>
            💪 Benefícios
          </a>
          <a href="#avaliacoes" className="mobile-nav__link" onClick={onClose}>
            ⭐ Avaliações
          </a>
          <a href="#promo" className="mobile-nav__link" onClick={onClose}>
            🔥 Ofertas
          </a>
        </div>

        <div className="mobile-nav__footer">
          <a href="#" className="btn btn--primary btn--full">
            Entrar na conta
          </a>
          <a
            href="#produto"
            className="btn btn--ghost btn--full"
            onClick={onClose}
          >
            🛒 Comprar agora
          </a>
        </div>
      </nav>
    </>
  );
}
