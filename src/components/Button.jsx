export function Button({ variant = 'primary', disabled = false, children = 'Continue' }) {
  return (
    <button
      className={`ui-button ui-button--${variant}`}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
