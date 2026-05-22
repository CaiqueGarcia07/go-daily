import { useCart } from '../../../context/CartContext';
import './CartDrawer.css';

function fmt(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function CartDrawer({ open, onClose }) {
  const { items, total, count, freeShippingLeft, freeShippingPct, removeItem, updateQty } =
    useCart();

  return (
    <>
      <div className={`cart-overlay${open ? ' open' : ''}`} onClick={onClose} />

      <div className={`cart-drawer${open ? ' open' : ''}`}>
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            Meu Carrinho{' '}
            <span style={{ color: 'var(--yellow)' }}>({count})</span>
          </div>
          <button className="cart-drawer-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>
                Seu carrinho está vazio
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                Adicione os Whey Gummies favoritos!
              </div>
              <a
                href="#catalogo"
                className="btn btn--primary btn--sm"
                onClick={onClose}
              >
                Ver produtos →
              </a>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={`${item.id}-${item.flavor}`}
                item={item}
                onRemove={() => removeItem(item.id, item.flavor)}
                onQty={(q) => updateQty(item.id, item.flavor, q)}
              />
            ))
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="cart-free-bar">
            <div
              className="cart-free-fill"
              style={{ width: `${freeShippingPct}%` }}
            />
          </div>
          <div className="cart-shipping-note">
            {freeShippingLeft === 0 ? (
              '🎉 Você ganhou frete grátis!'
            ) : (
              <>
                🚚 Faltam{' '}
                <strong style={{ color: 'var(--yellow)' }}>
                  {fmt(freeShippingLeft)}
                </strong>{' '}
                para frete grátis
              </>
            )}
          </div>
          <div className="cart-subtotal">
            <span style={{ fontSize: 14, color: 'var(--muted)' }}>Subtotal</span>
            <span className="cart-subtotal-value">{fmt(total)}</span>
          </div>
          <button
            className="btn btn--primary btn--full btn--lg"
            disabled={items.length === 0}
            style={items.length === 0 ? { opacity: 0.5 } : undefined}
          >
            Finalizar Compra →
          </button>
          <button className="btn btn--secondary btn--full btn--sm" onClick={onClose}>
            Continuar comprando
          </button>
        </div>
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onQty }) {
  return (
    <div className="cart-item">
      <div className="cart-item-img" style={{ background: 'var(--surface2)' }}>
        {item.img ? (
          <img src={item.img} alt={item.name} width={72} height={72} />
        ) : (
          <span style={{ fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            🍬
          </span>
        )}
      </div>
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-flavor">{item.flavor}</div>
        <div className="cart-item-price">
          {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
        <div className="cart-item-qty">
          <button className="cart-qty-btn" onClick={() => onQty(item.qty - 1)}>−</button>
          <span className="cart-item-qnum">{item.qty}</span>
          <button className="cart-qty-btn" onClick={() => onQty(item.qty + 1)}>+</button>
        </div>
      </div>
      <button className="cart-item-remove" onClick={onRemove} aria-label="Remover">
        ×
      </button>
    </div>
  );
}
