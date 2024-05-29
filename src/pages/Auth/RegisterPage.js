import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { register } from "../../services";

function Register(){
    useState("Register");
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email:'',
        password:''
    });

    function onChange(e){
        e.preventDefault();
        setForm((prev) => ({...prev , [e.target.id]: e.target.value}));
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const data = register(form);
            if(data){
                toast.success('account is registered suuccessfully, login please');
                navigate('/login');
            }else toast.error(data);
        }catch(e){
            toast.error(e.message);
        } 
    }
    return(
        <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input onChange={onChange} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={onChange} type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
    )
}

export default Register;