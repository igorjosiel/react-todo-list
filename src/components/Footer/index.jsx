import "./footer.style.css";

export default function Footer({ children, ...rest }) {
  return (
    <footer className="footer" {...rest}>
      {children}
    </footer>
  );
}
