
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import {Collapse, Fab, makeStyles} from '@material-ui/core'

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const buttonStyle = makeStyles({
        primary: {
            backgroundColor: "#f5ba13",
            '&:hover': {
                backgroundColor: "#d39b00",
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: "#f5ba13",
      },
            },
        }
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote(function(prevNote){
            return {
                ...prevNote,
                [name] : value
            };
        });
    }
    function handleClick(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }
    const [collapse, setCollapse] = useState(false);

    function handleCollapse(){
        setCollapse(true);
    }

    return (
        <div className="createArea">
            <Collapse in={collapse} collapsedHeight={30}>
            <form >
            
                <input autoComplete="off" onClick={handleCollapse} name="title" placeholder="Title"  value={note.title} onChange={handleChange}/>
                {collapse && <textarea name="content" placeholder="Take a note..." rows="3"  value={note.content} onChange={handleChange}/>}
                
                <div className="addIcon">
                <Fab
                classes={{
                    primary: buttonStyle().primary
                }}
                color="primary"
                size="medium"
                onClick={handleClick}>
                <AddIcon style={{
                    color: "white",
                    fontSize: "30px"
                }} />
                </Fab>
                </div>
            </form>
            </Collapse>  
        </div>
    );
}

export default CreateArea;