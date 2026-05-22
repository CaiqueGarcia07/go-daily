import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import './Header.css';

export default function Header({ onCartOpen, onMobileNavOpen }) {
  const { count } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <header className="site-header" id="siteHeader">
      <div className="container header-inner">
        <a href="#" className="header-logo">
          <img src="/logo.svg" alt="Go!Daily" className="header-logo__img" />
        </a>

        <nav className="header-nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#catalogo" className="nav-link">Produtos</a>
          <a href="#como-funciona" className="nav-link">Como funciona</a>
          <a href="#avaliacoes" className="nav-link">Avaliações</a>
          <a href="#promo" className="nav-link">Ofertas</a>
        </nav>

        <div className="nav-sep" />

        <button
          className="mobile-menu-btn"
          onClick={onMobileNavOpen}
          aria-label="Menu"
        >
          ☰
        </button>

        <div className="header-actions">
          <button
            className="header-icon-btn"
            onClick={() => setSearchOpen((v) => !v)}
            title="Buscar"
          >
            🔍
          </button>
          <button className="header-icon-btn" onClick={onCartOpen} title="Carrinho">
            🛒
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <a href="#" className="btn btn--primary btn--sm" style={{ marginLeft: 8 }}>
            Entrar
          </a>
        </div>
      </div>

      <div className={`search-bar${searchOpen ? ' open' : ''}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar produtos Go!Daily..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          className="btn btn--ghost btn--sm"
          onClick={() => setSearchOpen(false)}
        >
          Fechar ×
        </button>
      </div>
    </header>
  );
}
