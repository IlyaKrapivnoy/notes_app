import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';

function App() {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: new Date().toString(),
            title: 'Meetings',
            text: 'Schedule meeting with UI/UX team',
            color: '#dfdfdf',
            date: new Date().toString(),
        },
    ]);

    return <div className='App'>test</div>;
}

export default App;
