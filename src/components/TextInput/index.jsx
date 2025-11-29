import "./text-input.style.css";

export default function TextInput({ id, ...rest }) {
  return (
    <input id={id} type="text" className="text-input" {...rest} />
  );
}
