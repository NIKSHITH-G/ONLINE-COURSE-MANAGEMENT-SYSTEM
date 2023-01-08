import React,{useState} from 'react';
import './App.css'
const stylesheet ={Title:{fontFamily:"Times"}}
function Register () {
  const [array,setarray] = useState([]);
    const [userdetails,setuserdetails] =  useState ({
        fullname:"",
        username:"",
        password:"",
        email:"",
        gender:"",
        interests:[]
    });
    const handleinput = (e) =>
    {
        const name = e.target.name;
        const value =e.target.value;
        setuserdetails({...userdetails,[name]:value})
    }
    const handleinputs = (e) =>
    {
        const value = e.target.value;
        const check = e.target.checked;
        const temp = [...array];
      if (check === true)
      {temp.push(value);
    //   array.push(value);
      }
      else if (check == false)
      {
          
          temp.splice(temp.indexOf(value),1)
      }
      console.log(temp);
      setarray(temp);
     
    //    console.log(array);
       setuserdetails({...userdetails,interests:temp})
    }
   
    const regi = (e) =>
    {
        e.preventDefault();
        
        const regdata = JSON.stringify(userdetails);
        fetch('http://localhost:8000/Register',
        {
           mode:'cors',
           method:'POST',
           headers:{
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
           },
           body:regdata

        }).then((result) => result.json()).then(data=>check(data));
       
    }
    const check = (dta) =>
    {
        if(dta.success)
        {
            window.location.replace("/Login");
        }
        else
        {
            alert('Something went wrong Plz fill the form again');
            window.location.replace("/Register");
        }
    }
return (
    <div className ="container">
    <div className="title" style={stylesheet.Title}>Registration</div>
    <div className="form">
    <form action="http://localhost:8000/Register" method="POST" onSubmit={regi}>
        <div>
            <label htmlFor="name">Full Name</label>
            <input type ="text" name="fullname" id="fullname" value={userdetails.fullname} onChange={handleinput} placeholder="Enter your full name" />
            <span id="reqspan">*</span>
        </div>
        <div>
          <label htmlFor="Username">Username</label>
          <input type ="text" name="username" id="username" value={userdetails.username} onChange={handleinput}  placeholder="Enter your Username" />
          <span id="reqspan">*</span>
      </div>
      <div>
          <label htmlFor="email">Email</label>
          <input type ="email" name="email" id="email" autoComplete="off" value={userdetails.email} onChange={handleinput}  placeholder="Enter your email"/>
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input type ="password" name="password" id="password"value={userdetails.password} onChange={handleinput}  placeholder="Enter your password"/>
          <span id="reqspan">*</span>
      </div>
      <div>
         {/* Gender
         <input type ="radio" name="gender" id="male" value="male" onChange={handleinput} /> 
         <label htmlFor="Male">Male</label>
         <input type ="radio" name="gender" id="Female" value="Female" onChange={handleinput}/>
         <label htmlFor="Female">Female</label> 
         <input type ="radio" name="gender" id="Non-binary" value="Non-binary" onChange={handleinput}/> 
         <label htmlFor="Non-binary">Non-binary</label>
         <input type ="radio" name="gender" id="Unknown" value="Unknown" onChange={handleinput}/>
         <label htmlFor="Non-binary">Prefer not to Say</label> 
         <span id="reqspan">*</span> */}
      </div>
      <div>
          {/* Select you area of interests
          <input type ="checkbox" name="interests" value="Science" onChange={handleinputs} /> 
          <label htmlFor="Science">Science</label>
          <input type ="checkbox" name="interests" id="Arts" value="Arts" onChange={handleinputs} /> 
          <label htmlFor="Arts">Arts</label>
          <input type ="checkbox" name="interests" value="Humanities" onChange={handleinputs} /> 
          <label htmlFor="Humanities">Humanities</label>
          <input type ="checkbox" name="interests" value="Management" onChange={handleinputs} /> 
          <label htmlFor="Management">Management</label>
          <input type ="checkbox" name="interests" value="Coding" onChange={handleinputs} /> 
          <label htmlFor="Coding">Coding</label> */}
      </div>
     <button type="submit">Submit</button>
    </form>
  </div>
  </div>
);
}
export default Register;

