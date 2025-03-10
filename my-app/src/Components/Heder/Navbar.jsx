export default function Navbar() {
    return (
        <nav>
            <ul className={"bg-[#1A2E40] flex gap-4 h-[5.625rem] w-[25rem] rounded-[15px] items-center justify-center"}>
                <li>
                    <a href={"#"}>Dashboard</a>
                </li>
                <li>
                    <a href={"#"}>Convert</a>
                </li>
                <li>
                    <a href={"#"}>Compare</a>
                </li>
                <li>
                    <a href={"#"}>News</a>
                </li>
            </ul>
        </nav>
    );
}