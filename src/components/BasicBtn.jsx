import { Link } from "react-router-dom"

export const BasicBtn = ({ btnStyleClass = 'px-5 py-2 rounded-lg border-2 cursor-pointer border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]', btnData }) => {
    return (
        <>
            {btnData.path ? (
                <Link
                    to={btnData.path}
                    className={btnStyleClass}
                >
                    {btnData.title}
                </Link>
            ) : (
                <button
                    onClick={btnData.onClick}
                    className={btnStyleClass}
                >
                    {btnData.title}
                </button>
            )}
        </>
    )
}
