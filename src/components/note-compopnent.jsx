import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";

function Note(props){
    function handleClick(){
        console.log(props.id);
        props.onDelete(props.id);
    }
    return (
    <div className = "note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <IconButton onClick={handleClick} ><DeleteIcon style={{color: "#f74242"}} /></IconButton>
    </div>
    );
}

export default Note;