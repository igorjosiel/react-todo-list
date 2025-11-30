import "./date-input.style.css";

export default function DateInput({ id, ...rest }) {
  return (
    <input id={id} type="date" className="date-input" {...rest} />
  );
}
