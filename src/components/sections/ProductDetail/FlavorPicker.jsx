import { FLAVORS } from '../../../data/products';
import './FlavorPicker.css';

export default function FlavorPicker({ active, onChange }) {
  return (
    <div>
      <div className="flavor-picker__label">
        Sabor: <span>{active.label}</span>
      </div>
      <div className="flavor-picker__grid">
        {FLAVORS.map((f) => (
          <button
            key={f.id}
            className={`flavor-btn${active.id === f.id ? ' active' : ''}`}
            onClick={() => onChange(f)}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 6,
                background: f.color,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              {f.emoji}
            </span>
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
