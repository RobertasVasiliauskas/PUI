import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Heder/Header.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Convert from './Components/Convert/Convert.jsx';
import Compare from './Components/Compare/Compare.jsx';
import News from './Components/News/News.jsx';
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';

function App() {
    const location = useLocation();
    const noHeaderRoutes = ['/login', '/register'];

    return (
        <div className={"flex flex-col flex-1 min-h-screen mx-5"}>
            {!noHeaderRoutes.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/convert" element={<Convert />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}