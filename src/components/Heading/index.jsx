import "./heading.style.css";

export default function Heading({ children, ...rest }) {
  return (
    <h1 className="heading" {...rest}>
      {children}
    </h1>
  );
}
