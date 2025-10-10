import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]);

    return (
        <main className="relative max-w-[1200px] w-full h-screen flex flex-col mx-auto overflow-hidden">
            {children ? children : <Outlet />}
        </main>
    )
}