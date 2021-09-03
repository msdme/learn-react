import { useState } from "react";

const Home = () => {
    // let name = "Mario"
    const [ name, setName ] = useState('mario');
    const [ age, setAge ] = useState(10);
    const handleClick = () =>{
        setName('Luigi');
        setAge(40);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> { name } is { age } </p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
     );
}
 
export default Home;