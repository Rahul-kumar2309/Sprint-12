import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './components/Button';
import { InputField } from './components/InputField';
import { ProductCard } from './components/ProductCard';
import './styles.css';

function App() {
  return (
    <main className="showcase">
      <header className="showcase__header">
        <div>
          <p className="showcase__eyebrow">Sprint 12 / Track A</p>
          <h1>Small pieces.<br />A clear system.</h1>
        </div>
        <p className="showcase__intro">A living catalog of the reusable interface components built for the product team.</p>
      </header>
      <section className="showcase__grid" aria-label="Component showcase">
        <div className="showcase__panel">
          <h2>Form controls</h2>
          <InputField placeholder="e.g. Northstar workspace" />
          <div className="showcase__actions">
            <Button variant="primary">Create workspace</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
        <div className="showcase__panel showcase__product">
          <ProductCard title="Field Notes" price="$28" theme="light" />
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
