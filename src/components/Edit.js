import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Edit(props) {
  const [title,setTitle]=useState(props.editNotes.title);
  const [desc,setDesc]=useState(props.editNotes.desc);
  
  const onchangeTitle=(e)=>{
    setTitle(e.target.value);
    
  }
  const onchangeDesc=(e)=>{
    setDesc(e.target.value);
   
  }
    const onSave=()=>{
      // console.log(props.editNotes.title)
      if(title==='' && desc===''){
       
      }
      else
      {
      let month = new Date().getMonth();
      let date = new Date().getDate();
      let day=date+' '+month;
        props.update(title,desc,day);
      }
    }
  return (
    <div className="box bg-dark text-light ">
      <div className="d-flex  justify-content-between p-3 ">
      <Link className="lead text-link" to='/' onClick={()=>{onSave();}}><img src="/back.png" alt="" className='image'/></Link>
        <Link to='/' className="lead text-link"   onClick={ ()=>{props.ondelete(props.notes)}}>❌</Link>
      </div>
      <div className="title  p-2 ">
        <input
          className="bg-dark text-light border-bottom border-secondary"
          type="text"
          maxLength="50"
          placeholder="Title"
          value={title}
          onChange={onchangeTitle}
        />
      </div>
      <div className="desc p-2">
        <textarea
          className="bg-dark text-light"
          name=""
          id=""
          rows="19"
          placeholder="Type Something"
          value={desc}
          onChange={onchangeDesc}
        ></textarea>
      </div>
    </div>
  )
}
