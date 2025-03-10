import { useState } from 'react';
import Navitem from './Navitem.jsx';

import icon_feed from '../../assets/Feather.svg';
import icon_convert from '../../assets/Divide_square.svg';
import icon_compare from '../../assets/Book_open.svg';
import icon_dashboard from '../../assets/Sidebar.svg';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('Dashboard');

    return (
        <nav className={ "bg-[#1A2E40] flex h-[5.625rem] w-[46rem] rounded-[15px] px-[2rem] justify-center"} >
            <ul className={"flex grow items-center justify-center h-full"}>
                <Navitem icon={icon_dashboard} title={"Dashboard"} isActive={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
                <Navitem icon={icon_convert} title={"Convert"} isActive={activeTab === 'Convert'} onClick={() => setActiveTab('Convert')} />
                <Navitem icon={icon_compare} title={"Compare"} isActive={activeTab === 'Compare'} onClick={() => setActiveTab('Compare')} />
                <Navitem icon={icon_feed} title={"News"} isActive={activeTab === 'News'} onClick={() => setActiveTab('News')} />
            </ul>
        </nav>
    );
}