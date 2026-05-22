import { useEffect } from 'react';
import './Toast.css';

export default function Toast({ show, icon = '🛒', text, sub, onHide }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onHide, 3000);
    return () => clearTimeout(t);
  }, [show, onHide]);

  return (
    <div className={`toast${show ? ' show' : ''}`}>
      <div className="toast__icon">{icon}</div>
      <div>
        <div className="toast__text">{text}</div>
        {sub && <div className="toast__sub">{sub}</div>}
      </div>
    </div>
  );
}
