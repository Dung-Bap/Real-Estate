/** @format */
import clsx from 'clsx';

const Button = ({ children, outline = false, primary = false, onClick, ...props }) => {
    const AllProps = { onClick, ...props };
    return (
        <button
            className={clsx(
                outline && 'px-[30px] py-[12px] border border-white rounded-md text-white capitalize',
                primary && 'text-white px-[24px] py-[10px] rounded-md bg-main'
            )}
            {...AllProps}
        >
            {children}
        </button>
    );
};

export default Button;
