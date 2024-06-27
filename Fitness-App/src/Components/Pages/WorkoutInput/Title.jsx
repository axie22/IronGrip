import React, { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './Title.css';

function getTitle() {
    {/* Get date in MM/DD/YYYY format with padding */}
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    {/* Set up the timer */}
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    {/* Formatting time to get HH:MM format */}
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };


    {/* Create different states for the button */}
    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setTimer(0);
        setIsActive(false);
    };

    return (
        <>
            <h1>
                Today's Workout ({month}/{day}/{year})
            </h1>
            <h3>
                Timer: {formatTime(timer)}
            </h3>
            <div>
                {/* Use the react bootstrap class for button design */}
                <ButtonGroup className="mb-2">
                    <ToggleButton
                        id="start-button"
                        type="radio"
                        variant="outline-success"
                        name="timer-control"
                        value="start"
                        checked={isActive}
                        onChange={startTimer}
                    >
                        Start
                    </ToggleButton>
                    <ToggleButton
                        id="stop-button"
                        type="radio"
                        variant="outline-danger"
                        name="timer-control"
                        value="stop"
                        checked={!isActive && timer !== 0}
                        onChange={stopTimer}
                    >
                        Stop
                    </ToggleButton>
                    <ToggleButton
                        id="reset-button"
                        type="radio"
                        variant="outline-primary"
                        name="timer-control"
                        value="reset"
                        checked={timer === 0}
                        onChange={resetTimer}
                    >
                        Reset
                    </ToggleButton>
                </ButtonGroup>
            </div>
            
            
        </>
    );
}

export default getTitle;
