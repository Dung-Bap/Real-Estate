/** @format */

import { Link, NavLink } from 'react-router-dom';
import { path } from '../../utils/path';
import { NAVIGATE } from '../../utils/contants';
import Button from '../common/Button';
import withBaseComp from '../../hocs/withBaseComp';

const Navigate = ({ location }) => {
    const bgHome = location?.pathname === '/';
    return (
        <div className="w-full px-[44px] py-[10px] fixed flex justify-between top-[85px] right-0 left-0 z-50">
            <Link to={path.HOME}>
                <img className="w-[120px] max-h-[44px] object-cover" alt="" src={bgHome ? '/logo1.png' : '/logo.png'} />
            </Link>
            <div className="flex items-center">
                {NAVIGATE.map((item, index) => (
                    <NavLink
                        key={index}
                        to={`/${item.path}`}
                        className={({ isActive }) =>
                            isActive
                                ? bgHome
                                    ? 'uppercase text-white px-[25px] py-[18px] font-semibold'
                                    : 'uppercase px-[25px] py-[18px] font-semibold'
                                : bgHome
                                ? 'uppercase text-gray-300 px-[25px] py-[18px]'
                                : 'uppercase px-[25px] py-[18px]'
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
                {bgHome ? (
                    <Button outline onClick={() => console.log('ahihi')}>
                        Add Listing
                    </Button>
                ) : (
                    <div className={'w-[134px] h-[47px] bg-transparent rounded-md capitalize'}></div>
                )}
            </div>
        </div>
    );
};

export default withBaseComp(Navigate);
