import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header=()=>{

    const [isOpen,setIsOpen] = useState(false);

    return(
        <header className="py-6 px-3 md:px-6 flex items-center justify-between">
            {/* <h1 className="text-red-500">bismillah</h1> */}
            <a href="/" className="hidden md:block p-2 rounded-md text-xl font-semibold text-purple-600 hover:bg-slate-800 transition-colors">Nashif Rahman</a>

            {/* untuk hamburger button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24}/>:<Menu size={24}/>}
            </button>

            <nav className={`absolute md:static md:flex top-20 left-5 py-2 px-3 transition-all duration-300 rounded-lg bg-slate-900 md:bg-transparent ${isOpen ? "block" : "hidden"}`} >
                <ul className="flex flex-col md:flex-row md:space-x-4 text-left md:text-center">
                    <li><a href="#Project" className="block px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors">Projects</a></li>
                    <li><a href="#About" className="block px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors">About</a></li>
                    <li><a href="#Skills" className="block px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors">Skills and Tech</a></li>
                </ul>
            </nav>
            <a href="https://wa.me/6281212119466" target="_blank" className="font-semibold bg-green-600 px-4 py-2 rounded-[5px] hover:bg-green-900 transition-colors">WhatsApp</a>
        </header>
    )
}

export default Header;