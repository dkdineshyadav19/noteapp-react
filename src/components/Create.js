import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Create(props) {
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const onchangeTitle=(e)=>{
    setTitle(e.target.value);
    
  }
  const onchangeDesc=(e)=>{
    setDesc(e.target.value);
   
  }
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const onSave=()=>{
      if(title==='' && desc===''){
       
      }
      else
      {
        let month = new Date().getMonth();
        let date = new Date().getDate();
        let day=date+' '+months[month];
        props.update(title,desc,day);
      }
    }
  return (
    <div className="box bg-dark text-light">
      <div className="d-flex  justify-content-between p-2">
        <Link className="lead text-link" to='/' onClick={onSave}><img src="/back.png" alt="" className='image'/></Link>
        {/* <Link className="lead text-link" onClick={onSave} to='/'><img src="/save100.png" alt="" className='image'/></Link> */}
      </div>
      <div className="title my-2 p-2">
        <input
          className="bg-dark text-light "
          type="text"
          maxLength="50"
          placeholder="Title"
          value={title}
          onChange={onchangeTitle}
          required
        />
      </div>
      <div className="desc p-2">
        <textarea
          className="bg-dark text-light"
          name=""
          id=""
          rows="20"
          placeholder="Type Something"
          value={desc}
          onChange={onchangeDesc}
          required
        ></textarea>
      </div>
    </div>
  );
}
