import React from "react"
import Header from "./header"
import Footer from "./footer"
import NoteComponent from "./note-compopnent"
import Notes from "../notes"
console.log(Notes);
function App() {
    return <div>
        <Header />


        {Notes.map(function(eachNote){
            return( 
            <NoteComponent 
            key={eachNote.key}
            title={eachNote.title}
            content={eachNote.content}
            />
            );
        })}

        <Footer />
    </div>
}

export default App;