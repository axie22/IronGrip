import './SetCard.css';

function SetCard({ exerciseName, previous, weight, reps }) {
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
                        <tr>
                            <td>1</td>
                            <td>{previous}</td>
                            <td>{weight}</td>
                            <td>{reps}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default SetCard