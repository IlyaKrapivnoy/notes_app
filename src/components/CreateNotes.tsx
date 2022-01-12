import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {}

const CreateNotes: React.FC<ICreateNotesProps> = (props) => {
    return (
        <>
            <h2>Create Notes</h2>
            <Form className='mt-3 mb-3'>
                <Form.Group className='mb-3' controlId='formBasic'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Title for the Note'
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasic'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        placeholder='Enter Your Notes'
                        as='textarea'
                        rows={3}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control
                        type='color'
                        id='colorInput'
                        defaultValue='#dfdfdf'
                        title='Choose your color'
                    />
                    <Button type='submit' variant='primary'>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default CreateNotes;
