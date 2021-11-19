import React, { useState} from "react";
import { Note } from './Models/note.model';
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
import "./App.css"
import {Row, Col, Container } from "react-bootstrap";


function App() { 

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Add Your ToDo Below Box",
    text: "",
    color: "#e6eff0",
    date: (new Date()).toString(),
  }]);

  return(
   <>
   <Header />
   <Container className="mt-5">
    <Row>  
   <Col>
       <NotesList notes={ notes } setNotes={ setNotes}/>
     </Col>
   </Row>
   <Row>  
   <Col>
       <CreateNotes notes={ notes } setNotes={ setNotes}/>
     </Col>
   </Row>
   </Container>
   </>
  );
}

export default App;
