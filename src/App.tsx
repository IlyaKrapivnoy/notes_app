import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.model';
import { v4 as uuidv4 } from 'uuid';
import CreateNotes from './components/CreateNotes';

function App() {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: uuidv4(),
            title: 'Meetings',
            text: 'Schedule meeting with UI/UX Team',
            color: '#dfdfdf',
            date: new Date().toString(),
        },
    ]);

    return (
        <>
            <Header />
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <NotesList notes={notes} setNotes={setNotes} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CreateNotes notes={notes} setNotes={setNotes} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
