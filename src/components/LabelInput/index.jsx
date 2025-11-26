import "./label-input.style.css";

export default function LabelInput({ htmlFor, children, ...rest }) {
  return (
    <label htmlFor={htmlFor} className="label-input" {...rest}>
      {children}
    </label>
  );
}
