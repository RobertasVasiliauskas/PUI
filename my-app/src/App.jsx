import './App.css'
import Header from './Components/Heder/Header.jsx'
import Carousel from './Components/Dashboard/Carousel.jsx'

function App() {
    return (
        <div className={"flex flex-col flex-1 min-h-screen"}>
            <Header/>
            <Carousel/>
        </div>
    );
}

export default App
