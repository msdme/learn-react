import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    
    useEffect( ()=>{
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            // data disini didapat dari then sebelumnya, 
            // yaitu return response.json();
            .then((data)=>{
                setBlogs(data)
                setIsPending(false)
            })
    },[] );
    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="Blog List"/>}
        </div>
    );
}

export default Home;