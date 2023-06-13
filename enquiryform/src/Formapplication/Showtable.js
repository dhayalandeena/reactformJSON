import React ,{useEffect, useState} from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Showtable=()=>{

  const navigation = useNavigate();
    const [data,setdata]=useState([]);

    const handledelete=(id)=>{
        const confirm=window.confirm("would like to delete the employee details?");
        if(confirm){
            axios.delete('http://localhost:3000/users/' +id) 
            .then(res=>{
               window.location.reload();
            })
            .catch(err=>console.log(err));
        }
    }
  
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((response) => setdata(response.data))
            .catch((err) =>console.log(err));
    },[])
    
  
        

return(<div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
  
  <Link className="btn btn-sm btn-primary me-2 flex " to={'/adduser'}>Add Employee</Link>
 
   <h1>Employee information</h1>
<div className='w-75 rounded bg-white border shadow p-4'>
<table className='table striped'>
<thead>
    <tr>
        <th>EmpID</th>
        <th>Emp Name</th>
        <th>Department</th>
        <th>Company</th>
        <th>Action</th>
    </tr>
</thead>



<tbody>
    {
    data.map((ele,ind) =>(

<tr key={ind}>

    <td>{ele.id}</td>
    <td>{ele.name}</td>
    <td>{ele.department}</td>
    <td>{ele.company}</td>
    <Link to={`/readuser/${ele.id}`} class='btn btn-sm  btn-info me-2'>Read</Link>
    <Link to={`/update/${ele.id}`}class='btn btn-sm btn-primary me-2' >Update</Link>
    <button onClick={e=>handledelete(ele.id )} className='btn btn-sm btn-danger me-2'>Delete</button>
</tr>


    )) 
    
 
    }
</tbody>   
    



</table>
</div>


</div>
)



}

export default Showtable;