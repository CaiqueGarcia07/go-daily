import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product, onToast, delay }) {
  const { addItem } = useCart();
  const [liked, setLiked] = useState(false);

  function handleAdd() {
    addItem({ id: product.id, name: product.name, flavor: product.flavor, price: product.price, qty: 1 });
    onToast?.(`${product.name} — ${product.flavor}`);
  }

  return (
    <div
      className="prod-card"
      data-animate
      data-category={product.category}
      {...(delay ? { 'data-delay': delay } : {})}
    >
      <div className="prod-card__badges">
        {product.badge && (
          <span className={`badge badge--${product.badgeType}`}>{product.badge}</span>
        )}
      </div>
      <div
        className="prod-card__flavor-dot"
        style={{ background: product.flavorColor }}
      />
      <button
        className={`prod-card__wish${liked ? ' liked' : ''}`}
        onClick={() => setLiked((v) => !v)}
        aria-label="Favoritar"
      >
        {liked ? '♥' : '♡'}
      </button>

      <div className="prod-card__img-wrap">
        <div className="prod-card__img-placeholder">
          <span>{product.flavorEmoji}</span>
        </div>
      </div>

      <div className="prod-card__body">
        <div className="prod-card__cat">Go!Daily · Whey Gummy</div>
        <div className="prod-card__name">{product.name}</div>
        <div className="prod-card__flavor">
          {product.flavorEmoji} {product.flavor}
        </div>
        <div className="prod-card__attrs">
          {product.attrs.map((a) => (
            <span key={a} className="prod-card__attr">{a}</span>
          ))}
        </div>
        <div className="prod-card__stars">
          <span className="stars">{'★'.repeat(Math.round(product.rating))}</span>
          <span>{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="prod-card__prices">
          <span className="prod-card__price">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          {product.oldPrice && (
            <span className="prod-card__old">
              {product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          )}
        </div>
        {product.installments && (
          <div className="prod-card__installments">{product.installments} sem juros</div>
        )}
        <div className="prod-card__add">
          <button className="btn btn--primary btn--full" onClick={handleAdd}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
