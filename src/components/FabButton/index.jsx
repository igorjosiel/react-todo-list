import "./fab-button.style.css";

export default function FabButton({
  children,
  ariaLabel,
  ariaPressed,
  title,
  ...rest
}) {
  return (
    <button
      className="fab"
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      title={title}
      {...rest}
    >
      {children}
    </button>
  );
}
