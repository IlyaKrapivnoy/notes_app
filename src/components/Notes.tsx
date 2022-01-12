import React from 'react';
import { Note } from '../models/note.model';

interface INotesProps {
    note: Note;
}

const Notes: React.FC<INotesProps> = ({ note }) => {
    return <div>Note Card</div>;
};

export default Notes;
