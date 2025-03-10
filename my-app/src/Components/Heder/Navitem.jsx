export default function Navitem({ icon, title, isActive, onClick }) {
    return (
        <li className={`flex grow items-center justify-center gap-2 cursor-pointer rounded-[15px] w-auto h-full ${isActive ? "bg-[#1F394F]" : ""} ${title === "Dashboard" ? "ml-[-2rem]" : ""} ${title === "News" ? "mr-[-2rem]" : ""}`} onClick={onClick}>
            <img src={icon} alt={title} className="h-12 w-12" />
            <a className="text-xl" href="#">{title}</a>
        </li>
    );
}