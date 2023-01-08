import {useEffect,useState} from 'react';
import {Redirect, useParams} from 'react-router-dom'

function Coursepage ()
{
 const [cordata,setcordata] = useState([
     
 ]);
 const {courseid} = useParams();
 const checkcourse = () =>
{
      const lol = courseid;
       const rec = {"id":lol};
    //    console.log(rec);
        fetch('http://localhost:8000/courses',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(rec)
         }).then((result)=>result.json()).then(data=>{
            //  console.log(data);
             setcordata(data)
            })
        }
const  printdata = (id) =>
{
  const lol = localStorage.getItem("id");
  const recd ={"student": lol,"course" :id }
   fetch('http://localhost:8000/addcourses',{
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
 document.body.style.backgroundImage = "none";
 document.body.style.backgroundColor=" rgb(255, 192, 203)";
 checkcourse();
 
},[]
)
// useEffect(() => {
//     console.log({cordata})
//   },[cordata])
return(
    <div className="grid-container">
         <div className="menu">
           <h1>List of Courses</h1>
           <br/> <a href="/course/Science"> <span className="spanlist">-Science </span> </a>
           <br/>  <a href="/course/Arts">  <span className="spanlist">-Arts</span> </a>
           <br/>   <a href="/course/Humanities">  <span className="spanlist">-Huamnities</span> </a>
           <br/>  <a href="/course/Management">  <span className="spanlist">-Management</span> </a>
           <br/>  <a href="/course/Coding">  <span className="spanlist">-Coding</span> </a>
      </div>
     
      {cordata.map((item) => {
          return (
          <div className="coursecontainer"> 
            <span>Course_id:{item.course_id}</span>
            <br/> <span>Name:{item.course_name}</span>
            <br/> <span>Faculty:{item.faculty}</span>
            <br/> <span>Stream:{item.stream}</span>
            <br/> <span>Price:{item.price}</span>
            <br/> <button className="add" onClick={()=> printdata(item._id)}>Add Course</button> 
          </div>
          )
      })}
      
   
    
    </div>
)
}
export default Coursepage;