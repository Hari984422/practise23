import React, { useState } from 'react'
import axios  from 'axios'
function AddUser() {
    let [name,setname] = useState("")
    let [Price,setprice] = useState("")
    let [email,setemail] = useState("")
    let user= {name,Price,email}
    function riti(e){
        e.preventDefault()
        axios.post('http://localhost:8000/Hriti',user)
        .then((res)=>{
            console.log(Response)
            alert('User Created ')
        })
            .catch((err)=>{
                console.log(err)
                alert('solve the error')
            
        })
    }

    return (
        <div className="user">
        <form onSubmit={riti}>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}} />
            <label>Price:</label>
            <input type='number' value={Price} onChange={(e)=>{setprice(e.target.value)}}/>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default AddUser
