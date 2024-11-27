import axios from "axios"
import { useEffect, useState } from "react";

function ViewUser(){
    // 2
    let [data,setData] = useState([])
    // 7
    let [force,setforce] = useState(0)
    // 1
    useEffect(()=>{
        axios.get('http://localhost:8000/Hriti')
    .then((res)=>{
        // 3
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err);
        
    })
    // 9
    },[force])
    console.log(data);
    

    // 6
    function deleteUser(id){
        // console.log(id);
        axios.delete(`http://localhost:8000/Hriti/${id}`)
        .then((res)=>{
            alert('User deleted');
            // 8
            setforce(force + 1);
        })
        .catch((err)=>{
            alert('Error deleting');            
        })
      
    }
    return(
        // 4
        <div className="view_user">
            {data.map((user)=>{
                return (
                    <div className="user">
                        <h1>{user.name}</h1>
                        <h2>{user.Price}</h2>
                        <h2>{user.email}</h2>
                        <button>Edit</button>
                       {/* 5 */}
                        <button onClick={()=>{deleteUser(user.id)}}>remove</button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default ViewUser