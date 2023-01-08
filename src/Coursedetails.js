import {useEffect,useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import './App2.css'
function Coursedetails(course)
{
    const [corpdata,setcorpdata] = useState([
     
    ]);
  const checkcourse = () =>
  {
       const rec = {"id":course};
    //    console.log(rec);
        fetch('http://localhost:8000/checkcourses',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(rec)
         }).then((result)=>result.json()).then(data=>{
            //  console.log(data);
             setcorpdata(data)
            })
  }
  const dropdata = (id) =>
  {
    const lol = localStorage.getItem("id");
    const recd ={"student": lol,"course" :id }
     fetch('http://localhost:8000/dropcourses',{
              mode: 'cors',
               method :'PUT',
               headers : {
                   'Accept' : 'application/json',
                   'Content-type' : 'application/json'
               },
               body:JSON.stringify(recd)
           }).then();
         Navigate();
  }
  const Navigate = () =>
{
   const lol = localStorage.getItem("id");
   window.location.replace("/users/"+lol)
}  
  useEffect(()=>
  {
    checkcourse();
  },[]
  )
  return(
      <div className="courses" >
    {corpdata.map((item) => {
        return (
        <div className="coursecontainer"> 
          <span>Course_id:{item.course_id}</span>
          <br/> <span>Name:{item.course_name}</span>
          <br/> <span>Faculty:{item.faculty}</span>
          <br/> <span>Stream:{item.stream}</span>
          <br/> <span>Price:{item.price}</span>
          <br/> <button className="Drop" onClick={()=> dropdata(item._id)}>Drop Course</button> 
        </div>
        )
    })}
       </div>
  )
}
export default Coursedetails;