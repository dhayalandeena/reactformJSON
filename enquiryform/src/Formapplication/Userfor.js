import axios from 'axios';
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
//import Showtable from './Showtable';


const Userfor =()=>{


  const [values,infoupdate ]=useState({

    id:'',
    name:'',
    department:'',
    company:''

  })
  const navigation =useNavigate();

const createuser=(event)=>{
  event.preventDefault();
 axios.post('http://localhost:3000/users',values)
            .then((response) => console.log(response))
            .catch((err) =>console.log(err));
            navigation('/showuser')
}


return(<div class='bg-secondary'>
  <header>
    <div class="text-primary text-bold">
        TVS Automobile solutions
    </div>
  </header>
<div class= 'form'>  
     
     <form class='container form-horizontal' onSubmit={createuser}>
     <div>
     <h1 class='text-center text-primary '> Emp Portal</h1>
    
     <div class=" form-group form-floating mb-3">
     <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
     onChange={e=> infoupdate({...values,id:e.target.value})} autoComplete='off' required/>
     <label for="floatingInput">EmpID</label>
     </div>

     <div class=" form-group form-floating mb-3">    
     <input  type="text" class="form-control" id="mobile" placeholder="Mobile number" 
     onChange={e=> infoupdate({...values,name:e.target.value})} required/>
     <label for="mobile">Name</label> 
     </div>
     <div class="form-floating mb-3">

     <input class=" form-group form-control" type='text' id="city" placeholder="City"
      onChange={e=> infoupdate({...values,department:e.target.value})} autoComplete='off' required/>
     <label for='city'>Department</label> 
     </div>
     <div class="form-group form-floating mb-3"> 
     <input class="form-control  w-2" type='text' id="state" placeholder="state"
     onChange={e=> infoupdate({...values,company:e.target.value})} autoComplete='off' required />
     <label for='state'>Company</label> 
     </div>
     <div class='text-center'>
     <button class='btn btn-primary p-1 w-25  mt-sm-3'>Submit</button>
     </div>
     </div>
    
     </form>
     </div>
     <footer>
      <p class ='font-weight-bold text-center' >Ki Mobility solutions</p>
     </footer>
      </div>)
    }
    export default Userfor;