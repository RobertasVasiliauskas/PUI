import logo from '../../assets/logo.svg'
import Navbar from './Navbar.jsx';

export default function Header() {
    return (
        <header className={"h-[11rem] flex items-center justify-between px-[2rem]"}>
            <img src={logo} alt={"logo"} className={"h-10 invert-100 h-[10rem] w-[10rem]"}/>
            <Navbar />
            <h1>Hello</h1>
        </header>
    )
}