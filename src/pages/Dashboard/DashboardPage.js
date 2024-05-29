import { useState, useEffect } from "react";
import DashboardCard from "./components/DashboardCard";
import DashboardEmpty from "./components/DashboardEmpty";
import { getOrders } from "../../services";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

function DashboardPage(){
    const [orders, setOrders] = useState([]);
    useTitle('Dashboard');

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getOrders();
                setOrders(data);
            }catch(e){
                toast.error(e.message);
            }
        }
        fetchData();
    },[]);
    return(
        <>
        {orders.length > 0 ? 
            (orders.map((order, key)=><DashboardCard key={key} order={order}/>))
            : 
            (<DashboardEmpty/>)
        }        
        </>
    )
}

export default DashboardPage;