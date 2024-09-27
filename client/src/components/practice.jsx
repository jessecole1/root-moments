import React, { useState } from 'react';
import './style.css';

const Practice = () => {

    const [clicked, setClicked] = useState("");

    const handleClick = () => {
        if (clicked === 'box1') {
            setClicked('')
        } else {
            setClicked('box1');
        }
    }

    return (

        <div>
            <div onClick={() => handleClick('box1')} className={`${clicked === 'box1' ? "widthOpenx heightOpenx" : "widthClosex heightClosex"}`}></div>
            <div></div>
        </div>
    );
};

export default Practice;
