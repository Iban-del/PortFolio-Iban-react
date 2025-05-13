

/** NavBar */
const NavBar = () =>{
    return <div className="w-[100%] transparent h-24">
        <div className="block md:hidden">
            Menu mobile 📱
        </div>

        <div className="hidden md:flex">
            Menu desktop 🖥️
        </div>
    </div>
}

export default NavBar;