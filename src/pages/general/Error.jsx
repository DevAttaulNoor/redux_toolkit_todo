import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const Error = ({ errorData }) => {
    return (
        <main className="relative max-w-[1200px] w-full h-screen mx-auto flex items-center justify-center">
            <div className="flex flex-col items-center text-center px-4 gap-5">
                <h1 className="text-6xl font-extrabold text-customPurple">Error!</h1>

                <p className="text-xl text-customWhite">
                    {errorData?.message || "Something went wrong."}
                </p>

                <Link
                    to={Routes.HOME.path}
                    className="px-6 py-3 bg-customPurple text-customWhite font-semibold rounded-lg bg-purple-700"
                >
                    Back
                </Link>
            </div>
        </main>
    );
};

export default Error;