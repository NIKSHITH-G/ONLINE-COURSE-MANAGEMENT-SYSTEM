import React,{useEffect,useState} from 'react'
function Search() 
{
       
    const [corr,setcorr] = useState([]);
    const checksearch = () =>
    {
            const item = JSON.parse( (localStorage.getItem("course")));
            console.log(item);
            setcorr(item);
          
    }
    useEffect(()=>
    {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor=" rgb(255, 192, 203)";
           checksearch() 
           
        
    },[])
    const resultcheck = () => corr.length===0;
    
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
     <div className = "message">
             <h1>Search Results</h1>
           
     </div>
     <div className="courses">
             {
                    resultcheck()
                    ?<div className ="coursecontainers"> <h1>No results found</h1> </div>
                :  <div className="coursecontainer">
                
                   {corr.map((soi) => {
                        return (
                        <div className="coursecontainer"> 
                          <span>Course_id:{soi.course_id}</span>
                          <br/> <span>Name:{soi.course_name}</span>
                          <br/> <span>Faculty:{soi.faculty}</span>
                          <br/> <span>Stream:{soi.stream}</span>
                          <br/> <span>Price:{soi.price}</span>
                          <br/> <button className="add" onClick={()=> printdata(soi._id)}>Add Course</button> 
                        </div>
                        )
                    })}
             
                
                
                 </div>
             }
  
    </div>
   
    </div>
 )
 
  
 
}
export default Search;