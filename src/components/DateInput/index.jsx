import { Fragment } from "react";
import './date-input.style.css';

export function DateInput ({ id, label, ...rest }) {
    return (
        <Fragment>
            <label htmlFor={id} className="label-input">
                {label}
            </label>

            <input
                id={id}
                type="date"
                className="date-input"
                {...rest}
            />
        </Fragment>
    );
}
