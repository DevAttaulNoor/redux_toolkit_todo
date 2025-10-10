import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RouteStructure } from './routes/RouteStructure';
import Loading from './pages/general/Loading';

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={RouteStructure} />
        </Suspense>
    );
};

export default App;