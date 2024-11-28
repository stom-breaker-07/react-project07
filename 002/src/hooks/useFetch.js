import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoding] =useState(false);
    const [error,setError]=useState("");

    useEffect(()=>{
      const controller = new AbortController()

        const fetchData=async()=>{
            setLoding(true);
          try{
            const response=await fetch(url,{signal:controller.signal});
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const result=await response.json();
            setLoding(false);
            setData(result);
          }catch (error){
           console.log(error.message);
           setLoding(false);
           setError(error.message)
          }
        }
        fetchData();

        return ()=>controller.abort;

    },[url]);

  return {data ,loading,error};
}
