import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from "./pages/Main";
import Myinfo from "./components/myinfo";
import MySkills from "./components/mySkills";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutme" element={<Myinfo />} />
                <Route path="/skill" element={<MySkills />} />
            </Routes>
        </Router>
    );
}

export default App;
