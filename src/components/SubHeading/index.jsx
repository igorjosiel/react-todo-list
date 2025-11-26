import "./sub-heading.style.css";

export default function SubHeading({ children, ...rest }) {
  return (
    <h2 className="subheading" {...rest}>
      {children}
    </h2>
  );
}
