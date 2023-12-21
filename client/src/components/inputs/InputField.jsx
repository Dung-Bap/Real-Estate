import React from 'react';

const InputField = ({ label, errors, type, placeholder, registername }) => {
    return (
        <div className="w-full mb-[18px]">
            <label className="font-semibold">{label}</label>
            <input
                {...registername}
                className="py-[9px] px-[16px] w-full cursor-text placeholder:text-gray-600 rounded-md border border-gray-300 outline-none my-[4px] bg-gray-100"
                type={type}
                placeholder={placeholder}
            />
            <span className="text-red-700 text-sm">{errors}</span>
        </div>
    );
};

export default InputField;
