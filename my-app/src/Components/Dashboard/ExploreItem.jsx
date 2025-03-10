export default function ExploreItem({ icon, title}) {
    return (
        <li
            className={`flex items-center justify-center gap-2 cursor-pointer rounded-[15px] w-auto h-full 
             bg-blue-400 `}
        >
            <img src={icon} alt={title} className="h-5 w-5" />
            <h1 className="text-lg font-semibold">{title}</h1>
        </li>
    );
}