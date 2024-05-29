import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function DropdownLogedout(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return(
        <>
        <button onClick={()=> setDropdownOpen(!dropdownOpen)} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="relative text-gray-800 hover:text-gray-600 px-3 py-2 text-lg dark:text-gray-200">
            <FaRegUser/>
        <div id="dropdownInformation" className={`${dropdownOpen? '' : 'hidden'} z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdownInformationButton">
            <li>
                <Link to='/products' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LogIn</Link>
            </li>
            <li>
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
            </li>
            </ul>
        </div>
        </button>
        </>
    )
}

export default DropdownLogedout;