import { useState, useEffect } from 'react';    

const useFetch = (url)=>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                const res = await fetch(url);
                if(!res){
                    setError("Failed To Fetch");
                    alert("Failed To Fetch");
                }
                const result = await res.json();
                // console.log("result ::>> ",result.tour);
                setData(result.tour);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    },[url]);

    return {data, error, loading};
};

export default useFetch;