/** @format */
import { Outlet } from "react-router-dom";
import { Navigate, TopHeader } from "../../components/public";

const PublicLayout = () => {
    return (
        <div className="w-full min-h-screen relative">
            <TopHeader />
            <Navigate />
            <Outlet />
        </div>
    );
};

export default PublicLayout;
