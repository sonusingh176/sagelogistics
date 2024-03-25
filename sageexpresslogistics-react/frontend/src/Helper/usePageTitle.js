import { useEffect } from "react"

//helper function for setting title ,according to page.
const usePageTitle =(title)=>{
    useEffect(()=>{
        document.title=title;
    },[title]);
}

export default usePageTitle;