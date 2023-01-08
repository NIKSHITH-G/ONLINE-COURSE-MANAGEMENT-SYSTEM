import React,{Component} from 'react';
const checklogin = () =>
{
       const item = localStorage.getItem("id");
       console.log(item);
        fetch('http://localhost:8000/users/:userid',{
            mode: 'cors',
             method :'POST',
             headers : {
                 'Accept' : 'application/json',
                 'Content-type' : 'application/json'
             },
             body:JSON.stringify(item)
         }).then((result)=>result.json()).then(data=>{console.log(data)})
         return this.data;
        }
export default checklogin;