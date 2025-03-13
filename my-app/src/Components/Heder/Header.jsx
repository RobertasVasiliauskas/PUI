import logo from '../../assets/logo.svg'
import Button from '../Button.jsx'
import Navbar from './Navbar.jsx';
import Search from './Search.jsx'

export default function Header() {
    return (
        <header className={"h-[11rem] flex items-center justify-between px-[2rem]"}>
            <img src={logo} alt={"logo"} className={"h-10 invert-100 h-[10rem] w-[10rem]"}/>
            <Navbar />
            <div className={"flex items-center space-x-4"}>
                <Search/>
                <Button text={"Login"} className={"text-2xl text-primary px-4 py-2 rounded-[15px]"} />
            </div>
        </header>
    )
}