import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import NoteComponent from "./note-compopnent"
//import Notes from "../notes"
import CreateArea from "./CreateArea"

//console.log(Notes);


function App() {

    const [notes, setNotes] = useState([]);

    function addNewNote(newNote){
        console.log(newNote);
        setNotes(function(prev){
            return [...prev, newNote]
        })
    }

    function deleteItem(id){
        setNotes(function(prev){
            return (
                prev.filter(function(noteItem, noteId){
                    return noteId !== id;
                })
            )
        })
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNewNote} />

        {notes.map(function(eachNote, index){
            return( 
            <NoteComponent 
            id={index}
            key={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteItem}
            />
            );
        })}

        <Footer />
    </div>
}

export default App;