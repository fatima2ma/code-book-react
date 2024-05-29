import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaGear, FaGhost} from "react-icons/fa6";
import SearchBar from "./SearchBar";
import DropdownLogedin from "./DropdownLogedin";
import DropdownLogedout from "./DropdownLogedout";
import { useCart } from "../context/CartContext";

function Header(){
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')) || false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLogedUser, setIsLogedUser] = useState(false);
    const {cartList} = useCart();

    useEffect(() => {
        sessionStorage.getItem('token')? setIsLogedUser(true) : setIsLogedUser(false);
    },[sessionStorage.getItem('token')])

    useEffect(() => {
        localStorage.setItem('dark', JSON.parse(dark));
        dark? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    },[dark]);
    return(
        <>
        <nav className="border-b-2 border-b-gray-200 ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    {/* <!--
                        Icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    {/* <!--
                        Icon when menu is open.

                        Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <Link to='/' className="flex flex-shrink-0 space-x-4 items-center dark:text-gray-200">
                    <FaGhost className="text-blue-600 text-4xl"/>
                    <h1 className="text-xl font-bold">Ghost World</h1>
                    </Link>                    
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-0">
                            <button onClick={() => setDark(!dark)} className="text-gray-800 hover:text-gray-600 px-3 py-2 text-lg dark:text-gray-200" aria-current="page"><FaGear/></button>
                            <SearchBar/>
                            <Link to='/cart' className="text-gray-800 hover:text-gray-600 px-3 py-2 text-lg relative dark:text-gray-200">
                                <FaCartShopping/>
                                <span className="absolute bg-red-500 w-4 h-fit top-0 right-0 text-sm text-white rounded-full text-center">{cartList.length}</span>
                            </Link>
                            {isLogedUser?<DropdownLogedin setIsLogedUser={setIsLogedUser}/> : <DropdownLogedout/>}
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isOpen? "sm:hidden": "hidden"}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-medium" id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" aria-current="page">Dashboard</a>
                <a href="#" className="text-gray-800 hover:text-gray-600 block rounded-md px-3 py-2 text-base font-medium">Search</a>
                <a href="#" className="text-gray-800 hover:text-gray-600 block rounded-md px-3 py-2 text-base font-medium">Cart</a>
                <a href="#" className="text-gray-800 hover:text-gray-600 block rounded-md px-3 py-2 text-base font-medium">Profile</a>
                </div>
            </div>
        </nav>

        </>
    )
}

export default Header;