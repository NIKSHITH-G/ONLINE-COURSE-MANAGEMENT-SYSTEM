import React,{useState} from 'react';
import './Navbar.css';
function Navbartext() {

    const [usersearch,setusersearch] =  useState ();
    const handleinput = (e) =>
    {
        const value = e.target.value;
        setusersearch(value)
    }
    const loghandlere =(e)=>
    {
        const dend = {"course":usersearch}
        console.log(dend);
        e.preventDefault();
         fetch('http://localhost:8000/Search',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(dend)
         }).then((result)=>result.json()).then(data=>{bkkk(data)})
        }
    const bkkk = (data) =>{
     localStorage.setItem("course",JSON.stringify(data));
     window.location.replace("/searchresults");
    }    
    return(
    <div className = "navbar">
         <form className="search-bar" onSubmit={loghandlere}>
         <input type="text" name="usersearch" id="usersearch" defaultValue={usersearch} onChange={handleinput} placeholder="search" />
         <button type="submit">Search</button>
         </form> 
   
    </div>
    )
}
export default Navbartext;