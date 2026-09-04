export function InputField({ placeholder = 'Enter a value', error = false, disabled = false }) {
  return (
    <label className="input-field">
      <span className="input-field__label">Workspace name</span>
      <input
        className={`input-field__control${error ? ' input-field__control--error' : ''}`}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error}
      />
      {error && <span className="input-field__message">Please enter a workspace name.</span>}
    </label>
  );
}
