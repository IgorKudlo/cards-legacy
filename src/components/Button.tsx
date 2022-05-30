import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    gray?: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const { gray, className, type = 'button', ...restProps } = {...props};

    const finalClassName = `button ${gray ? 'button--gray' : ''} ${className}`

    return (
        <button
            type={type}
            className={finalClassName}
            {...restProps}
        />
    )
};

export default Button;