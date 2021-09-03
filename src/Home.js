import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( ()=>{
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                    throw Error('Data Gagal diambil');
                }
                return response.json();
            })
            // data disini didapat dari then sebelumnya, 
            // yaitu return response.json();
            .then((data)=>{
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            //catch ini didapat dari throw error diatas
            // tapi bisa juga bukan, seperti server mati
            .catch((err)=>{
                setIsPending(false)
                setError(err.message)
            })
    },[] );
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="Blog List"/>}
        </div>
    );
}

export default Home;