import "./App.css";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";

function App() {
  let savedNotes;
  const [editNotes,setEditNotes]=useState();
  //checking if there any data stored in local storage or not
  if (
    localStorage.getItem("myNotes") === null ||
    localStorage.getItem("myNotes") === ""
  ) {
    savedNotes = [];
  } else {
    savedNotes = JSON.parse(localStorage.getItem("myNotes"));
    
  }
  //edit 
  const edit=(editNote)=>{
    setEditNotes(editNote);
    ondelete(editNote);//deleting the previous note before update and inserting new one
  }
  //delete
  const ondelete=(note)=>{
    setNewNote(newNote.filter( (e)=>{
      return note!==e;
    }));
  }

  // on update / create
  const update = (title, desc, date) => {
    let count =newNote.length+1;
    let note = {
      sno: count,
      title: title,
      desc: desc,
      editied: date,
    };

    setNewNote([...newNote, note]);
  };

  const [newNote, setNewNote] = useState(savedNotes);
  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(newNote));
  }, [newNote]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Notes newNote={newNote} edit={edit} ondelete={ondelete}/>} />
          <Route exact path="/create" element={<Create update={update} />} />
          <Route exact path="/edit" element={<Edit update={update} editNotes={editNotes} ondelete={ondelete}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
