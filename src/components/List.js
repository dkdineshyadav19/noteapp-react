import React from 'react'
import { Link } from 'react-router-dom'


export default function List(props) {
    const editClick=()=>{
        props.edit(props.notes);
    }
  return (
    <>

        <div className="card m-1 col-10 ">
        <Link to='/edit'  className="card-link text-link text-dark" onClick={editClick}>
            <div className="card-body">
             <h5 className="card-title">{props.notes.title}</h5>
             <h6 className="card-subtitle mb-2 text-muted">Edited:{props.notes.editied}</h6>
             <p className="card-text">{props.notes.desc.slice(0,209)}...</p>
            </div>
        </Link>
        </div>
        
    </>
  )
}
