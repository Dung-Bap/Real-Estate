/** @format */

import { icons } from '../../utils/icons';
import withBaseComp from '../../hocs/withBaseComp';
import clsx from 'clsx';

const TopHeader = ({ location }) => {
    const { HiOutlineMailOpen, FaFacebookF, FaInstagram, FaLinkedinIn, FiPhone } = icons;
    const BgHome = location?.pathname === '/';
    return (
        <div
            className={clsx(
                'w-full px-[44px] py-[22px] fixed flex justify-between top-0 right-0 left-0 z-50 border-b',
                !BgHome && 'bg-primary_700'
            )}
        >
            <div className="flex items-center">
                <HiOutlineMailOpen size={24} color="white" />
                <span className="font-semibold text-white pl-[12px]">
                    Email us at : <span className="font-normal text-gray-300">example@mail.com</span>
                </span>
            </div>
            <div className="flex items-center gap-[12px] justify-between">
                <span className="p-[10px]">
                    <FaFacebookF size={20} color="white" />
                </span>
                <span className="p-[10px]">
                    <FaInstagram size={20} color="white" />
                </span>
                <span className="p-[10px]">
                    <FaLinkedinIn size={20} color="white" />
                </span>
                <span className="border h-[39px]"></span>
                <span className="p-[10px]">
                    <FiPhone size={20} color="white" />
                </span>
                <span className="text-gray-300">123-4567 890</span>
            </div>
        </div>
    );
};

export default withBaseComp(TopHeader);
