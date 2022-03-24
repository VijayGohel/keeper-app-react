import React from 'react';
import { MdDelete } from "react-icons/md";

export const Note = ({title, content,id,onDelete})=>{
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>

            <button onClick={()=>onDelete(id)}><MdDelete /></button>
        </div>
    )
}