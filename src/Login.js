import React,{useState} from 'react';
import './App.css'
function Login()
{
    const [userregis,setuserregis] =  useState ({
        username:"",
        password:""
    });
    const handleinput = (e) =>
    {
        const name = e.target.name;
        const value =e.target.value;
        setuserregis({...userregis,[name]:value})
    }
    const loghandler =(e)=>
    {
        const dend = JSON.stringify(userregis);
        e.preventDefault();
         fetch('http://localhost:8000/Login',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:dend
         }).then((result)=>result.json()).then(data=>{
          check(data)   })
        
    }
    const check = (la) =>
    {
            if (la.success === true)
            {
                localStorage.setItem("id",la.id);
                window.location.replace("/users/"+la.id)
            }
            else{
                alert('Wrong details');
                window.location.replace("/Login");
            }
    }
    return(
        <div className="container">
            <div className="title">Login</div>
      <div className="form">
      <form className="form1" action="http://localhost:8000/Login" method="POST" onSubmit={loghandler} >
          
          <div>
            <label htmlFor="Username">Username</label>
            <input type ="text" name="username" id="username" value={userregis.username} onChange={handleinput}  placeholder="Enter your Username" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type ="password" name="password" id="password" value={userregis.password}  onChange={handleinput}  placeholder="Enter your password"/>
        </div>
        
       <button className="form2" type="submit" >Login</button>
      </form>
        </div>
        </div>
    );
} 
export default Login;
