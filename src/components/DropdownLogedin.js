import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout, getUser } from "../services";
import { FaRegUserCircle } from "react-icons/fa";

function DropdownLogedin({setIsLogedUser}){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        async function fetchUser(){
            try{
            const data = await getUser();
            if(data) setUserEmail(data.email);
            }catch(e){
                console.log(e.message);
            }
        }
        fetchUser();
    },[])

    function handleLogout(){
        logout();
        setIsLogedUser(false);
    }
    return(
        <>
        <button onClick={()=> setDropdownOpen(!dropdownOpen)} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="relative text-gray-800 hover:text-gray-600 px-3 py-2 text-lg dark:text-gray-200">
            <FaRegUserCircle/>
        <div id="dropdownInformation" className={`${dropdownOpen? '' : 'hidden'} z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{userEmail}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdownInformationButton">
            <li>
                <Link to='/dashboard' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
                <Link to='/products' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            </ul>
            <div className="py-2">
            <button onClick={() => handleLogout} className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
            </div>
        </div>
        </button>
        </>
    )
};

export default DropdownLogedin;