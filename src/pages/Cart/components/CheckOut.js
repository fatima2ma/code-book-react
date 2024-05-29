import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { getUser, createOrder } from "../../../services";
import { FaRegCreditCard, FaLock } from "react-icons/fa6";
import { toast } from "react-toastify";

function CheckOut({setCheckoutOpen}){
    const navigate = useNavigate();
    const {cartList, total, clearCart} = useCart();
    const [user, setUser] = useState({});

    const [form, setForm] = useState({
        cardnumber: '',
        month: '',
        year: '',
        code: '',
    })
    
    useEffect(() => {
        async function fetchUser(){
            try{
                const data = await getUser();
                setUser(data);
            }catch(e){
                toast.error(e.message);
            }
        }        
        fetchUser();
    },[])

    function handleChange(e){
        e.preventDefault();
        if(e.target.id !== 'name' && e.target.id !== 'email'){
            setForm(prev => ({...prev,
                [e.target.id]: e.target.value,
            }))
        }
    }

    async function handleOrderSubmit(e){
        e.preventDefault();
        try{            
            const data = await createOrder(cartList, total, user, form);
            clearCart();
            navigate('/order-summary', {state: {data: data, status: true}});
            toast.success('ordered successfully');
        }catch(e){
            navigate('/order-summary', {state: {status: false}});
            toast.error(e.message);
        }
    }
    return(
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ">
        <div class="w-full max-w-sm mx-auto my-2 p-4 h-full overflow-y-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleOrderSubmit} class="space-y-6">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl flex gap-2 items-center font-bold leading-none text-gray-900 dark:text-white">
                        <FaRegCreditCard />
                        Card Payment
                    </h5>
                    <button onClick={() => setCheckoutOpen(false)} class="text-lg font-medium cursor-pointer text-gray-900 hover:underline dark:text-gray-200">
                        x
                    </button>
                </div>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" name="name" id="name" value={user.name || ''} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" value={user.email || ''} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="cardnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card number</label>
                    <input onChange={(e) => handleChange(e)} type="number" name="cardnumber" id="cardnumber" placeholder="1234567" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div className="">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date:</label>
                    <input onChange={(e) => handleChange(e)} type="number" name="month" id="month" className="inline-block w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" placeholder="03" required="" />
                    <input onChange={(e) => handleChange(e)} type="number" name="year" id="year" className="inline-block w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" placeholder="27" required="" />
                </div>
                <div>
                    <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security Code</label>
                    <input onChange={(e) => handleChange(e)} type="number" name="code" id="code" placeholder="127" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div class="flex justify-center">
                    <h5 className="text-green-400 font-bold text-2xl">${total}</h5>
                </div>
                <button type="submit" class="w-full flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FaLock/> PAY NOW
                </button>
            </form>
        </div>
        </div>
    )
}

export default CheckOut;