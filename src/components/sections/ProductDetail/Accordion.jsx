import { useState } from 'react';
import './Accordion.css';

function AccordionItem({ title, body, isHtml }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item${open ? ' open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen((v) => !v)}>
        {title}
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4,6 8,10 12,6" />
        </svg>
      </button>
      <div className="accordion-body" style={{ maxHeight: open ? 400 : 0 }}>
        <div
          className="accordion-body-inner"
          {...(isHtml ? { dangerouslySetInnerHTML: { __html: body } } : { children: body })}
        />
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          body={item.body}
          isHtml={item.body.includes('<')}
        />
      ))}
    </div>
  );
}
