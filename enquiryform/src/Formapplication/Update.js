import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Update=()=>{

    
    const [values,infoupdate ]=useState({
        id:'',
        name:'',
        department:'',
        company:''
    
      })

    
    const {id} = useParams();
    const navigation = useNavigate(); 
    useEffect(() => {
        axios.get('http://localhost:3000/users/'+  id)
            .then(res => {
                infoupdate(res.data);
            })
            .catch(err => console.log(err));
    },[])


    const updateuser=(event)=>{
        event.preventDefault();
       axios.put('http://localhost:3000/users/'+id,values)
                  .then(res => {console.log(res);
                  
                  navigation('/showuser')
      })
      .catch(err =>console.log(err));
    }

    
return(<>
    <div class= 'form'>  
     
     <form class='container form-horizontal'>
     <div>
     <h1 class='text-center text-primary '> Update Portal</h1>
    
     <div class=" form-group form-floating mb-3">
     <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
      value={values.id} onChange={e=> infoupdate({...values,id:e.target.value})} autoComplete='off'  required/>
     <label for="floatingInput">EmpID</label>
     </div>

     <div class=" form-group form-floating mb-3">    
     <input  type="text" class="form-control" id="mobile" placeholder="Mobile number" 
     value={values.name} onChange={e=> infoupdate({...values,name:e.target.value})} autoComplete='off'  required/>
     <label for="mobile">Name</label> 
     </div>
     <div class="form-floating mb-3">

     <input class=" form-group form-control" type='text' id="city" placeholder="City"
      value={values.department} onChange={e=> infoupdate({...values,department:e.target.value})} autoComplete='off'  required/>
     <label for='city'>Department</label> 
     </div>
     <div class="form-group form-floating mb-3"> 
     <input class="form-control  w-2" type='text' id="state" placeholder="state"
     value={values.company} onChange={e=> infoupdate({...values,company:e.target.value})} autoComplete='off'  required />
     <label for='state'>Company</label> 
     </div>

     <div class='text-center'>
     <button onClick={updateuser} class='btn btn-primary p-1 w-25  mt-sm-3'>Update</button>
     </div>


     </div>
    
     </form>
     </div>

    </>)


}
export default Update;