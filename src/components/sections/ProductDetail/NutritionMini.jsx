import './NutritionMini.css';

const ITEMS = [
  { value: '12g',   label: 'Proteína\n(4 balas)' },
  { value: '4,8g',  label: 'Carboidratos' },
  { value: '56kcal',label: 'Por porção' },
  { value: '40',    label: 'Porções' },
];

export default function NutritionMini() {
  return (
    <div className="nutrition-mini">
      {ITEMS.map((item) => (
        <div className="nut-item" key={item.value}>
          <div className="nut-value">{item.value}</div>
          <div className="nut-label" style={{ whiteSpace: 'pre-line' }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
