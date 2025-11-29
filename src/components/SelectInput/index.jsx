import "./select-input.style.css";

export default function SelectInput({ id, options, ...rest }) {
  return (
    <select id={id} className="select-input" {...rest}>
      {options.map(({ value, option }, index) => {
        return (
          <option key={index} value={value}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
