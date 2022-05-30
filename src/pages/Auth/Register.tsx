import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

type Inputs = {
    email: string
    password: string
    confirmPassword: string
};

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"auth__subtitle"}>Sign Up</div>

            <Input placeholder={"Email"}
                   register={register('email', { required: true })}
            />
            {errors.email && <span>Email is required</span>}
            <Input type={"password"}
                   placeholder={"Password"}
                   register={register('password', { required: true })}
            />
            {errors.password && <span>Password is required</span>}
            <Input type={"password"}
                   placeholder={"Confirm password"}
                   register={register('confirmPassword', { required: true })}
            />
            {errors.confirmPassword && <span>Confirm password is required</span>}

            <div className={"auth__action-row"}>
                <Button gray>Cancel</Button>
                <Button type={'submit'}>Register</Button>
            </div>
        </form>
    );
};

export default Register;