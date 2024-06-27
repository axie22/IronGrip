import React, { useState } from 'react';
import './SetCard.css';

function SetCard({ exerciseName, previous, weight, reps }) {
    const [rows, setRows] = useState([
        { id: 1, previous, weight, reps },
        { id: 2, previous: '', weight: '', reps: '' },
        { id: 3, previous: '', weight: '', reps: '' },
        { id: 4, previous: '', weight: '', reps: '' },
    ]);

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

    return (
        <div className="set-card">
            <div className="exercise-name">
                <h2>{exerciseName}</h2>
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
                                <td>{row.weight}</td>
                                <td>{row.reps}</td>
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