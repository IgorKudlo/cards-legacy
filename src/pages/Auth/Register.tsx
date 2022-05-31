import React, {useEffect, useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';

type Inputs = {
    email: string
    password: string
    /*confirmPassword: string*/
};

const Register = () => {
    const [state, setState] = useState<any>();

     const instance = axios.create({
        baseURL: 'http://localhost:7542/2.0/',
        withCredentials: true,
    })

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        instance.post(`/auth/register`, data)
            .then(res => {
                console.log(res)
                setState(res.data)
            }).catch(e => console.log(e));
    };

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
            {/*<Input type={"password"}
                   placeholder={"Confirm password"}
                   register={register('confirmPassword', { required: true })}
            />
            {errors.confirmPassword && <span>Confirm password is required</span>}*/}

            <div className={"auth__action-row"}>
                <Button gray>Cancel</Button>
                <Button type={'submit'}>Register</Button>
            </div>

            <div>{JSON.stringify(state)}</div>
        </form>
    );
};

export default Register;