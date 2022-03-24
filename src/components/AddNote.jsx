import React, {useState} from "react";

const AddNote= ({onAdd})=>{
    const [note , setNote] = useState({title:"", content:""});

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
    }
    return(
        <form onSubmit={addNote}>
            <input type="text" name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="add a note"/>
            <button type="submit">Add</button>
        </form> 
    )
}

export default AddNote;