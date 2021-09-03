import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter( blog => blog.id !== id )
        setBlogs(newBlogs)
    }

    useEffect( ()=>{
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            // data disini didapat dari then sebelumnya, 
            // yaitu return response.json();
            .then((data)=>{
                setBlogs(data)
            })
    },[] );
    return ( 
        <div className="home">
            {
                // conditional templating on react, 
                // untuk menghandle ketika blogs null
            }
            {blogs && <BlogList handleDelete={ handleDelete } blogs={ blogs } title="Blog List"/>}
        </div>
    );
}

export default Home;