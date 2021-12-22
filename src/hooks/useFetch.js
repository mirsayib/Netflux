import { useEffect, useState } from "react"



const useFetch = (url, flag)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
            fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw Error('Could Not Fetch Data For That Resource');
                }
                return response.json()
            }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch(err => {
                setIsPending(false);
                setError(err.message)
            });
        
    }, [url, flag]);

    return {data, isPending, error, setIsPending}
}

export default useFetch;