import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    register?: any
}

const Input:React.FC<InputPropsType> = (props) => {
    const {
        type = 'text',
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        register,
        ...restProps
    } = {...props};

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter();
    }

    const finalInputClassName = `${className} ${error ? 'error-class' : ''}`;
    const finalSpanClassName = `'error' ${spanClassName ? spanClassName : ''}`;

    return (
        <>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...register}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
};

export default Input;