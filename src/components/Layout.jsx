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
        <main className=" relative mx-auto flex h-full w-full max-w-[1200px] flex-col overflow-hidden shadow-xl">
            {children ? children : <Outlet />}
        </main>
    )
}