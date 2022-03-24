import React from 'react';

export const Note = ({title, content,id,onDelete})=>{
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>

            <button onClick={()=>onDelete(id)}>delete</button>
        </div>
    )
}