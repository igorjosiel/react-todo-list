import "./fab-button.style.css";

export default function FabButton({ children, ariaLabel, title, ...rest }) {
  return (
    <button className="fab" aria-label={ariaLabel} title={title} {...rest}>
      {children}
    </button>
  );
}
