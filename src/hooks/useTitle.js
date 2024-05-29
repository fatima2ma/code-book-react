import { useState, useEffect } from "react";

function useTitle(title){
    useEffect(() => {
        document.title = title;
    },[title]);

    return null;
}

export default useTitle;