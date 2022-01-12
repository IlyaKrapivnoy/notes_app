import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.model';
import { v4 as uuidv4 } from 'uuid';

interface ICreateNotesProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = useState<string>('');

    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === '' || textRef.current?.value === '') {
            return setError('All Fields Are Mandatory!');
        }
        setError('');
        setNotes([
            ...notes,
            {
                id: uuidv4(),
                title: (titleRef.current as HTMLInputElement).value,
                text: (textRef.current as HTMLTextAreaElement).value,
                color: (colorRef.current as HTMLInputElement).value,
                date: new Date().toString(),
            },
        ]);
        (titleRef.current as HTMLInputElement).value = '';
        (textRef.current as HTMLTextAreaElement).value = '';
        (colorRef.current as HTMLInputElement).value = '#dfdfdf';
    };

    return (
        <>
            <h2>Create Notes</h2>

            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3' controlId='formBasic'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Title for the Note'
                        ref={titleRef}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasic'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        placeholder='Enter Your Notes'
                        as='textarea'
                        rows={3}
                        ref={textRef}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control
                        type='color'
                        id='colorInput'
                        defaultValue='#dfdfdf'
                        title='Choose your color'
                        ref={colorRef}
                        className='mb-3'
                    />
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Button type='submit' variant='primary' className='mt-3'>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default CreateNotes;
