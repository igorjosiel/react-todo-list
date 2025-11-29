import "./text-input.style.css";

export default function TextInput({ id, type, ...rest }) {
  return (
    <input
      id={id}
      type={type ?? "text"}
      className="text-input"
      {...rest}
    />
  );
}
