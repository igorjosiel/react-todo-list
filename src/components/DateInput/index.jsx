import './date-input.style.css';

export function DateInput ({ id, label, ...rest }) {
    return (
        <input
            id={id}
            type="date"
            className="date-input"
            {...rest}
        />
    );
}
