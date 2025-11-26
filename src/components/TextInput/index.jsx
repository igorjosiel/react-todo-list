import { Fragment } from 'react';
import './text-input.style.css';

export function TextInput ({ id, label, ...rest }) {
    return (
        <Fragment>
            <label htmlFor={id} className='label-input'>
                {label}
            </label>

            <input id={id} className='text-input' {...rest} />
        </Fragment>
    );
}
