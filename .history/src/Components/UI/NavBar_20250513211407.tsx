

/** NavBar */
const NavBar = () =>{
    return <div className="w-[100%] transparent h-24">
        <div className="block md:hidden bg-green-9 text-white p-4 rounded">
    Menu mobile 📱
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex bg-green-6 text-white p-4 rounded">
            Menu desktop 🖥️
        </div>
    </div>
}

export default NavBar;