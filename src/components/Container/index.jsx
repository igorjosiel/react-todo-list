import "./container.style.css";

export default function Container({ children, ...rest }) {
  return (
    <section className="container" {...rest}>
      {children}
    </section>
  );
}
