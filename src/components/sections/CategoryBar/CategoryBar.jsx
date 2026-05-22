import './CategoryBar.css';

const CATS = [
  { id: 'all',       icon: '🍬', label: 'Todos' },
  { id: 'gummy',     icon: '💊', label: 'Whey Gummy' },
  { id: 'protein',   icon: '💪', label: 'Proteínas' },
  { id: 'preworkout',icon: '⚡', label: 'Pré-Treino' },
  { id: 'creatine',  icon: '🧪', label: 'Creatina' },
  { id: 'recovery',  icon: '🔄', label: 'Recuperação' },
];

export default function CategoryBar({ active, onSelect }) {
  return (
    <div className="category-bar">
      <div className="container category-bar__inner">
        <div className="category-bar__row">
          {CATS.map((cat) => (
            <button
              key={cat.id}
              className={`cat-chip${active === cat.id ? ' active' : ''}`}
              onClick={() => onSelect(cat.id)}
            >
              <span className="cat-chip__icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
