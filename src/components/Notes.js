import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

export default function Notes(props) {
        
  return (
    
    <>
      <div className="showNotes text-light ">
      <p className='para'>{props.newNote.length===0?'Create your first note !📜🪶':''}</p>

      </div>
      <div className=" d-flex flex-wrap-reverse   justify-content-center align-items-center ">

      {props.newNote.length===0?'No Task to diplay':props.newNote.map((e)=>{
                
                return( 
                  <List notes={e} key={e.title} edit={props.edit} ondelete={props.ondelete}/>
            )
            })}
      </div>
      <div className="bg-light w-25">

      <div className="newNote  text-light  rounded-circle p-3 d-flex justify-conetn-center align-items-center">
           <Link className='text-link'   to='/create'> <div className='display-3 bgcreate'></div></Link>
      </div>
      </div>
    </>
  )
}
