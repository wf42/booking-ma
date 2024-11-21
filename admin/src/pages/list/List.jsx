import React, { useEffect } from 'react'
import './List.css'
import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"

const List = ({url}) => {
  const [list,setList] = useState([]);
  const fetchList = async () =>{
    const respone = await axios.get(`${url}/api/service/list`);
    if (respone.data.success) {
      setList(respone.data.data);
      
    }else{
      toast.error("Error")
    }
  }
  const removeService =  async(serviceId) => {
    const respone = await axios.post(`${url}/api/service/remove`,{id:serviceId})
    await fetchList();
    if (respone.data.success) {
      toast.success(respone.data.message)
    }
    else{
      toast.error("Error")
    }

  }

  useEffect(()=>{
    fetchList();
  },[]);
  return (
    <div className='list add flex col'>
      <p>All service List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} OM</p>
              <p onClick={()=>removeService(item._id)} className='cursor'>X</p>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default List
