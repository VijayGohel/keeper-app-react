import React, {useState} from "react";
import { MdAdd } from "react-icons/md";

const AddNote= ({onAdd})=>{
    const [note , setNote] = useState({title:"", content:""});

    const [isVisible,setIsVisible] = useState(false);

    function handleChange(e)
    {
        const name = e.target.name;
        
        setNote({...note , [name]: e.target.value })
    }

    function addNote(e)
    {
        e.preventDefault();

        onAdd(note);

        setNote({title:"", content:""});
        setIsVisible(false);
    }

    return(
        <form className="create-note" onSubmit={addNote} >
            {isVisible && <input type="text" name="title" onChange={handleChange} 
            value={note.title} placeholder="Title"/>}

            <textarea name="content" onChange={handleChange} 
            value={note.content} placeholder="add a note" rows={isVisible?3:1}
            onClick={()=>{setIsVisible(true)}}
            />

            {isVisible && <button type="submit"><MdAdd /></button>}
        </form>
    )
}

export default AddNote;