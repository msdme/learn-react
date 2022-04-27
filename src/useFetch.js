import { useState, useEffect } from "react";


// custom hooks di react harus diawali dengan "use", 
// untuk itu hook ini di beri nama "useFetch"
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( ()=>{
        const abortCont =  new AbortController();

        fetch(url, { signal:abortCont.signal })
            .then(response => {
                if(!response.ok){
                    throw Error('Data Gagal diambil');
                }
                return response.json();
            })
            // data disini didapat dari then sebelumnya, 
            // yaitu return response.json();
            .then((data)=>{
                setData(data)
                setIsPending(false)
                setError(null)
            })
            //catch ini didapat dari throw error diatas
            // tapi bisa juga bukan, seperti server mati
            .catch((err)=>{
                if( err.name === 'AbortError' ){
                    console.log('fetch aborted')
                }
                else{
                    setIsPending(false)
                    setError(err.message)
                }
            },1000);
        return () => abortCont.abort();
    },[url] );

    return { data, isPending, error }
}

export default useFetch;
