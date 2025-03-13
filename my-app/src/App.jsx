import './App.css'
import Header from './Components/Heder/Header.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'

function App() {
    return (
        <div className={"flex flex-col flex-1 min-h-screen"}>
            <Header/>
            <Dashboard/>
        </div>
    );
}

export default App
