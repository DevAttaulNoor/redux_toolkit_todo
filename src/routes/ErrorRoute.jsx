import { useRouteError } from "react-router";
import { Layout } from "../components/Layout";
import Error from "../pages/general/Error";

export const ErrorRoute = () => {
    const errorData = useRouteError();

    return (
        <Layout>
            <Error errorData={errorData} />
        </Layout>
    );
};