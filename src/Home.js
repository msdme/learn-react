import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter( blog => blog.id !== id )
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <BlogList handleDelete={ handleDelete } blogs={ blogs } title="Blog List"/>
            <BlogList handleDelete={ handleDelete } blogs={ blogs.filter((blog) => blog.author == 'mario' ) } title="Blog Author Mario"/>
        </div>
    );
}

export default Home;