import React, {FC} from 'react';
import './Input.scss';

type Props = {
    name: string,
    label: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    placeholder?: string,
    error?: string
}

const Input: FC<Props> = ({name, label, value, onChange, placeholder = '', error = ''}) => {
    return (
       <div className='inputGroup'>
            <label className='inputLabel'>{label}
            <input
                className='input'
                data-testid={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            </label>
            {!!error && <p className='textError'>{error}</p>}
       </div>
    );
};

export default Input;
