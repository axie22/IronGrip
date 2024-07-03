import React, { useState, useEffect, useRef } from 'react';
import {Button} from 'react-bootstrap';
import './SetCard.css';

function SetCard({ id, exerciseName, previous, deleteSetCard, onUpdate}) {
    const [rows, setRows] = useState([
        { id: 1, previous, weight: '', reps: '' },
        { id: 2, previous: '', weight: '', reps: '' },
        { id: 3, previous: '', weight: '', reps: '' },
        { id: 4, previous: '', weight: '', reps: '' },
    ]);

    useEffect(() => {
        if (typeof onUpdate === 'function') {
            onUpdate(id, { exerciseName, rows });
        }
    }, [rows]);

    const updateRowIds = (rows) => {
        return rows.map((row, index) => ({ ...row, id: index + 1 }));
    };

    const addRow = () => {
        const newRow = { id: rows.length + 1, previous: '', weight: '', reps: '' };
        setRows([...rows, newRow]);
    };

    const deleteRow = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updateRowIds(updatedRows));
    };

    const handleInputChange = (id, field, value) => {
        const updatedRows = rows.map(row => 
            row.id === id ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };

    return (
        <div className="set-card">
            <div className='exercise-header'>
                <div className="exercise-name">
                    <h2>{exerciseName}</h2>
                    
                </div>
                <div className='delete-exercise-button'>
                    <Button variant="danger" onClick={() => deleteSetCard(id)}>Delete</Button>
                </div>
            </div>
            <div className="row">
                <table className="set-card table">
                    <thead>
                        <tr>
                            <th>Sets</th>
                            <th>Previous</th>
                            <th>Weight</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.previous}</td>
                                <td>
                                    <input 
                                        type="text" 
                                        value={row.weight} 
                                        onChange={(e) => handleInputChange(row.id, 'weight', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        value={row.reps} 
                                        onChange={(e) => handleInputChange(row.id, 'reps', e.target.value)}
                                    />
                                </td>
                                <td onClick={() => deleteRow(row.id)}>-</td>
                            </tr>
                        ))}
                        <tr className="add-row" onClick={addRow}>
                            <td  colSpan="5">+</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default SetCard