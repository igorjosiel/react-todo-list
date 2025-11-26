import "./header.style.css";

export default function Header({ children, ...rest }) {
  return (
    <header className="header" {...rest}>
      {children}
    </header>
  );
}
