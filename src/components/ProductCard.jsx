export function ProductCard({ title = 'Field Notes', price = '$28', theme = 'light' }) {
  return (
    <article className={`product-card product-card--${theme}`}>
      <div className="product-card__image" aria-hidden="true">FN</div>
      <div className="product-card__content">
        <p className="product-card__eyebrow">Studio edition</p>
        <h2>{title}</h2>
        <p className="product-card__price">{price}</p>
        <button className="product-card__action" type="button">View product</button>
      </div>
    </article>
  );
}
