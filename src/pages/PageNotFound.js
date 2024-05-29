import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { FaQq, FaCartShopping } from "react-icons/fa6";
function PageNotFound(){
    useTitle('page not found');
    return(
        <div className="text-center w-full border rounded border-gray-200 dark:border-gray-600">      
        <div className="max-w-md py-12 mx-auto">
            <span><FaQq className="text-gray-900 w-24 h-24 mb-4 mx-auto"/></span>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Oooops, it's previuos that you lost your way    
            </p>
            <Link to='/' className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Back to Home 
                <FaCartShopping className="mx-1"/>
            </Link>
        </div>
        </div>
    )
}

export default PageNotFound;