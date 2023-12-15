/** @format */

import { Link } from "react-router-dom";
import { path } from "../../utils/path";

const Navigate = () => {
    return (
        <div className="w-full px-[44px] py-[23px] fixed flex justify-between top-[85px] right-0 left-0 z-50">
            <Link to={path.HOME}>
                <img
                    className="w-[120px] max-h-[44px] object-cover"
                    alt=""
                    src="/logo1.png"
                />
            </Link>
            <div className=""></div>
        </div>
    );
};

export default Navigate;
