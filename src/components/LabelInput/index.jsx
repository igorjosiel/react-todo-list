import "./label-input.style.css";

export function LabelInput ({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className="label-input">
            {children}
        </label>
    );
}
