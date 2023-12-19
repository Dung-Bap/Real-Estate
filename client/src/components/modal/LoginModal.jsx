import clsx from 'clsx';
import React, { useState } from 'react';

const LoginModal = () => {
    const [tab, setTab] = useState('Sign in');
    console.log(tab);
    const tabs = [
        { id: 1, name: 'Sign in' },
        { id: 2, name: 'New account' },
    ];

    return (
        <div onClick={e => e.stopPropagation()} className="min-w-[500px] bg-white">
            <div className="w-full flex flex-col">
                <h1 className="flex justify-center">Welcome to Double2D Real Estate</h1>
                <div className="border-b">
                    {tabs.map(item => (
                        <span
                            onClick={() => setTab(item.name)}
                            className={clsx(
                                'p-[16px] cursor-pointer',
                                item.name === tab ? 'border-b-4 border-primary_800' : ''
                            )}
                            key={item.id}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
