import Carousel from "./Carousel.jsx"
import ExploreList from "./ExploreList.jsx"

export default  function Dashboard() {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Carousel/>
            <ExploreList/>
        </div>
    )
}