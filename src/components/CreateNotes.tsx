import * as React from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from '../Models/note.model'

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

const handleSubmit =(e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(titleRef.current?.value === "" || textRef.current?.value === "") {
        return setError("Please Fill All Require Details");
    }
    setError("");
    setNotes([...notes, {
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
    }]);
    
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
}

  return (
      <>
<h2>Create Note</h2>

{error && <Alert variant="danger">{ error}</Alert>}

<form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
    <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title For The Note" ref={ titleRef }/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text Description</Form.Label>
        <Form.Control placeholder="Enter Your Note" as="textarea" rows={3} ref={ textRef }/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label htmlFor="colorInput">Choose Notes Color</Form.Label>
        <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={ colorRef }/>
    </Form.Group>
    <Button type="submit" variant="success">Submit</Button>
</form>
      </>
  );
};

export default CreateNotes;
