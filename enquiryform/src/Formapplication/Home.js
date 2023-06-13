import { Link } from "react-router-dom";
import './home.css'
const Home=()=>{


    return(<div className="App-header">
       <center><h1>Welcome to ! </h1> </center>
       <center><h1>TVS Employee information Portal </h1> </center>
      <Link className="btn btn-sm btn-primary me-2 flex " to={'/showuser'}>Database</Link> 
      <Link className="btn btn-sm btn-primary me-2 flex " to={'/adduser'}>Add new Employee</Link>
        </div>)
    
    
    }
    export default Home;