import './App.css'
import Header from './Components/Heder/Header.jsx'
import Carousel from './Components/Dashboard/Carousel.jsx'
import ExploreList from "./Components/Dashboard/ExploreList.jsx";

function App() {
    return (
        <div className={"flex flex-col flex-1 min-h-screen"}>
            <Header/>
            <Carousel/>
            <ExploreList/>
        </div>
    );
}

export default App
