import { useState } from "react";
import { FaWindowMinimize, FaPlus } from "react-icons/fa";
import './home.css';
function Accordion({item}){
    const [show, setShow] = useState(false);
    return(
        <div className="flex flex-col">
            <div className="flex border-b border-b-gray-2 p-3 cursor-pointer dark:border-b-gray-700" onClick={() => setShow(!show)}>
                <dt className="mb-1 flex-1 text-gray-700 md:text-lg dark:text-gray-400">{item.question}</dt>
                <button className={`accordionBtn ${show && "active"}`}>
                    <FaWindowMinimize className="accordionHide text-gray-700 dark:text-gray-400"/>
                    <FaPlus className="accordionShow text-gray-700 dark:text-gray-400"/>
                </button>
            </div>
            {show && <dd className="px-3 py-5 font-base text-gray-500 border-b border-b-gray-2 p-3 dark:border-b-gray-700 dark:text-gray-400">{item.answer}</dd>}
        </div>
                        
    )
}

export default Accordion;