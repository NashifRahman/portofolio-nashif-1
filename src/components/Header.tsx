function Header(){
    return(
        <header className="py-6 px-3 md:px-6 flex items-center justify-between">
            {/* <h1 className="text-red-500">bismillah</h1> */}
            <a href="/" className="p-2 rounded-md text-xl font-semibold text-purple-600 hover:bg-slate-800 transition-colors">Nashif Rahman</a>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#Project" className="px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors">Projects</a></li>
                    <li><a href="#About" className="px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors">About</a></li>
                    <li><a href="#Contacts" className="px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors">Contacts</a></li>
                </ul>
            </nav>
            <button className="font-semibold bg-green-600 px-4 py-2 rounded-[5px] hover:bg-green-900 transition-colors">WhatsApp</button>
        </header>
    )
}

export default Header;