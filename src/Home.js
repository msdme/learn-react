import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // url http ini dapat dari mana ya? 
    // dari json-server
    // ada di data/db.json
    // cara runningnya?
    // npx json-server --watch data/db.json --port 8000
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title="Blog List"/>}
        </div>
    );
}

export default Home;
