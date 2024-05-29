import { useLocation } from "react-router-dom";
import OrderFail from "./components/OrderFail";
import OrderSuccess from "./components/OrderSuccess";
import useTitle from "../../hooks/useTitle";

function OrderPage(){
    const {state} = useLocation();
    useTitle(`Order ${state.status}`);
    return(
        <>
            {state.status? <OrderSuccess id={state.dataId} data={state.data}/> : <OrderFail/>}
        </>
    )
}

export default OrderPage;