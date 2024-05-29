import { FaRegCheckCircle} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
function OrderSuccess({data}){
    console.log(data);
    return(
        <div className="text-center w-full border  rounded border-gray-200 dark:border-gray-600">      
        <div className="max-w-md py-12 mx-auto">
            <span><FaRegCheckCircle className="text-green-400 w-24 h-24 mb-4 mx-auto"/></span>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>Thank you {data.user.name} for the order!</p>
                <p>Your Order ID: {data.id}</p> 
                           
                <div className="my-5">
                    <p>Your order is confirmed.</p>
                    <p>Please check your mail {data.user.email} for the eBook.</p>
                    <p className="my-5">Payment ID: xyz_123456789</p>
                </div>
            </p>
            <Link to='/products' className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Continue Shopping 
                <FaCartShopping className="mx-1"/>
            </Link>
        </div>
        </div>
    )
}

export default OrderSuccess;