import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Create from './Components/Create';
import Edit from './Components/Edit';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Learning Redux Toolkit</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;