import React, { useEffect, useState } from "react";

import DigitalClock from './../DigitalClock/DigitalClock'

import "./Clock.scss";

const Clock: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = hours * 30 + minutes / 2;
    const minuteRotation = minutes * 6 + seconds / 10;
    const secondRotation = seconds * 6;

    return (
        <div className="clock">
            <div
                className="hand hour-hand"
                style={{ transform: `rotate(${hourRotation}deg)` }}
            ></div>
            <div
                className="hand minute-hand"
                style={{ transform: `rotate(${minuteRotation}deg)` }}
            ></div>
            <div
                className="hand second-hand"
                style={{ transform: `rotate(${secondRotation}deg)` }}
            ></div>
            <div className="center"></div>
            <div className="digital-clock">
                <DigitalClock />
            </div>
        </div>
    );
};

export default Clock;