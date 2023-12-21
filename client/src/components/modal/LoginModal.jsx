import clsx from 'clsx';
import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import InputField from '../inputs/InputField';
import Button from '../common/Button';
import { icons } from '../../utils/icons';
import appStore from '../../store/appStore';

const LoginModal = () => {
    const { MdOutlineClose } = icons;
    const { toggleIsShowModal } = appStore();
    const [tab, setTab] = useState('Sign in');
    const tabs = [
        { id: 1, name: 'Sign in' },
        { id: 2, name: 'New account' },
    ];

    const loginSchema = yup.object().shape({
        phone: yup
            .string()
            .required('Please enter "Phone Number"')
            .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Phone number does not exist !'),
        password: yup
            .string()
            .required('Please enter "Password"')
            .min(
                8,
                'Password must be at least 8 characters including uppercase letters, lowercase letters, numbers and special characters !!'
            )
            .test(
                'isValidPass',
                ' Password must be at least 8 characters including uppercase letters, lowercase letters, numbers and special characters !!',
                (value, context) => {
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasLowerCase = /[a-z]/.test(value);
                    const hasNumber = /[0-9]/.test(value);
                    const hasSymbole = /[!@#%&]/.test(value);
                    let validConditions = 0;
                    const numberOfMustBeValidConditions = 3;
                    const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
                    conditions.forEach(condition => (condition ? validConditions++ : null));
                    if (validConditions >= numberOfMustBeValidConditions) {
                        return true;
                    }
                    return false;
                }
            ),
    });

    const registerSchema = yup.object({
        name: yup.string().required('Please enter "Full Name"'),
        phone: yup
            .string()
            .required('Please enter "Phone Number"')
            .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Phone number does not exist !'),
        password: yup
            .string()
            .required('Please enter "Password"')
            .min(
                8,
                'Password must be at least 8 characters including uppercase letters, lowercase letters, numbers and special characters !!'
            )
            .test(
                'isValidPass',
                ' Password must be at least 8 characters including uppercase letters, lowercase letters, numbers and special characters !!',
                (value, context) => {
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasLowerCase = /[a-z]/.test(value);
                    const hasNumber = /[0-9]/.test(value);
                    const hasSymbole = /[!@#%&]/.test(value);
                    let validConditions = 0;
                    const numberOfMustBeValidConditions = 3;
                    const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
                    conditions.forEach(condition => (condition ? validConditions++ : null));
                    if (validConditions >= numberOfMustBeValidConditions) {
                        return true;
                    }
                    return false;
                }
            ),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(tab === 'Sign in' ? loginSchema : registerSchema),
    });

    const onSubmitHandler = data => {
        console.log({ data });
    };

    return (
        <div onClick={e => e.stopPropagation()} className="bg-white rounded-lg">
            <form onSubmit={handleSubmit(onSubmitHandler)} className="px-[40px] relative">
                <div className="flex flex-col w-[368px]">
                    <h1 className="flex justify-center font-Cinzel text-[24px] my-[10px] font-semibold">
                        Welcome to Double2D
                    </h1>
                    <div className="flex border-b mb-[20px]">
                        {tabs.map(item => (
                            <span
                                onClick={() => setTab(item.name)}
                                className={clsx(
                                    'p-[16px] cursor-pointer hover:text-blue-700 text-[16px]',
                                    item.name === tab ? 'border-b-4 border-primary_800' : ''
                                )}
                                key={item.id}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                    {tab === 'New account' && (
                        <InputField
                            registername={register('name')}
                            errors={errors.name?.message}
                            label={'Full Name'}
                            placeholder={'Enter FullName'}
                        />
                    )}
                    <InputField
                        registername={register('phone')}
                        errors={errors.phone?.message}
                        label={'Phone'}
                        placeholder={'Enter Phone'}
                    />
                    <InputField
                        registername={register('password')}
                        errors={errors.password?.message}
                        label={'Password'}
                        placeholder={'Enter Password'}
                    />
                    {tab === 'Sign in' ? <Button primary>Sign in</Button> : <Button primary>Register</Button>}
                    <span className="text-primary_800 text-[16px] flex justify-center my-[20px] cursor-pointer">
                        Forgot your password ?
                    </span>
                </div>
                <span
                    onClick={() => toggleIsShowModal({ isShowModal: false, childrenModal: null })}
                    className="absolute top-[20px] right-[20px] cursor-pointer"
                >
                    <MdOutlineClose size={20} />
                </span>
            </form>
        </div>
    );
};

export default LoginModal;
