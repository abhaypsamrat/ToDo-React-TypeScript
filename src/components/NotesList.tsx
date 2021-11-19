import * as React from 'react';
import { Note } from '../Models/note.model'
import Notes from './Notes'

interface INotesListProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes, setNotes}) => {
 
const handleDelete = (id: string) => {
  setNotes(notes.filter(note => note.id !== id));
}

  const renderNotes = ():JSX.Element[] => {
    return notes.map(notes => {
     return <Notes key={ notes.id} note={ notes } handleDelete={ handleDelete }/>
    })
  }
 
  return (
      <>
      <h2 className="my-3">Notes</h2>
      <div>{ renderNotes() }</div>
      </>
  );
};

export default NotesList;
