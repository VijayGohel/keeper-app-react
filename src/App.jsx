import React , {useState} from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";
import AddNote from "./components/AddNote";
// import notes from "./note";

const App = ()=>{

    const [notes , setNotes] = useState([]);

   function addNote(note)
   {
        setNotes([...notes , note]);
   }

   function deleteNote(id)
   {
        setNotes(notes.filter((note,index)=>
            index !== id
        ))
   }

    return(
        <div>
            <Header />

            <AddNote onAdd={addNote}/>
            {
                notes.map((note,index)=>
                    <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>        
                )
            }
            <Footer />
        </div>
    )
}

export default App;