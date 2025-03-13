import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Heder/Header.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Convert from './Components/Convert/Convert.jsx';
import Compare from './Components/Compare/Compare.jsx';
import News from './Components/News/News.jsx';
import Login from './Components/Login/Login.jsx';

function App() {
    return (
        <Router>
            <div className={"flex flex-col flex-1 min-h-screen"}>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/convert" element={<Convert />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;