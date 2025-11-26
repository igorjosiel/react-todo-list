import { Fragment } from 'react';
import './select-input.style.css';

export function SelectInput ({ id, label, options, ...rest }) {
    return (
        <Fragment>
            <label htmlFor={id} className='label-input'>
                {label}
            </label>

            <select id={id} className='select-input' {...rest}>
                {options.map(({ value, option }, index) => {
                    return (
                        <option key={index} value={value}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </Fragment>
    );
}
