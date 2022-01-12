import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface INotesProps {
    note: Note;
    handleDelete: (id: string) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
    return (
        <div className='mb-3'>
            <Card style={{ background: note.color }}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.text}</Card.Text>
                    <Card.Subtitle className='text-muted'>
                        {note.date}
                    </Card.Subtitle>
                    <Button
                        variant='secondary'
                        className='mt-3'
                        onClick={() => handleDelete(note.id)}
                    >
                        DELETE
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Notes;
