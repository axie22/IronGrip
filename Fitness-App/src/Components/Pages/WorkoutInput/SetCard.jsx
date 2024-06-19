
function SetCard() {
    let exerciseName = "Bench Press";
    let previous = "130 x 5";
    let weight = "185";
    let reps = "10"

    return (
        <div className="set-card">
            <div className="exercise-name">
                <h2>{exerciseName}</h2>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Sets</th>
                        <th>Previous</th>
                        <th>Weight</th>
                        <th>Reps</th>
                    </tr>
                </table>
            </div>
            <div className="row">
                <table className="set-card table">
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
                </table>
            </div>
            
        </div>
    );
}

export default SetCard