import ExploreItem from "./ExploreItem.jsx";

import icon_feed from '../../assets/Feather.svg';
import icon_convert from '../../assets/Divide_square.svg';
import icon_compare from '../../assets/Book_open.svg';

export default function ExploreList() {

    return (
        <div className="fixed bottom-70 right-0 m-4 bg-[#1A2E40] p-4 rounded-lg shadow-lg w-80">
            <div className="flex">
                <h1 className="text-center px-2 py-2 mr-32">Explore</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4" onClick={() => alert('View all clicked')}>View All</button>
            </div>

            <ul className="flex flex-col 1gap-4 justify-center space-y-2">
                <ExploreItem
                    title="USD"
                    icon={icon_feed}
                />
                <ExploreItem
                    title="EUR"
                    icon={icon_convert}
                />
                <ExploreItem
                    title="PLN"
                    icon={icon_compare}
                />
            </ul>
        </div>

    );
}