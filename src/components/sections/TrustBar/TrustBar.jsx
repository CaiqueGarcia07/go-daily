import { TRUST_ITEMS } from '../../../data/products';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-inner">
        {TRUST_ITEMS.map((item) => (
          <div className="trust-item" key={item.label}>
            <div className="trust-icon">{item.icon}</div>
            <div>
              <div className="trust-label">{item.label}</div>
              <div className="trust-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
