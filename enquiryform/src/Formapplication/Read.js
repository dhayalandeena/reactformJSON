import { useParams} from "react-router-dom";
import { useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Read=()=>{

    const [data,setdata]=useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/users/'+  id)
            .then((response) => setdata(response.data))
            .catch((err) =>console.log(err));
    },[])
    

return(<div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
 
 
<h1>Employee information</h1>
<div className='w-75 rounded bg-white border shadow p-4'>

 <div className='mb-2'>
<strong>EmpId:{data.id} </strong>   
</div>   

<div className='mb-2'>
<strong>Emp Name:{data.name} </strong>   
</div>  
<div className='mb-2'>
<strong>Emp Department:{data.department} </strong>   
</div>  
<div className='mb-2'>
<strong>Emp company:{data.company} </strong>   
</div>  


 <Link to={`/update/${data.id}`} className='btn btn-sm  btn-info me-2'>Edit</Link>
 <Link to={'/showuser'}className='btn btn-sm btn-primary me-2' >back</Link>
 

</div>


</div>




)

}
export default Read;