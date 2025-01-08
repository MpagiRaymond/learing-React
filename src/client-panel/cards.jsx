import React, {useEffect, useState} from "react";
import logo from '../assets/jo';

function cards() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert(`Thanks for voting. Total votes ${count}`);
    });
    const leaders = ['Vice president', 'Chief prefect', 'Sports prefect'];
render(
    <>
    <div className="cards">
        <img src={logo} alt="image" />
        <p className="title">{leaders.map(leader => leader)}</p>
        <div className="Details">
            <div>Name: kijjambu Mark</div>
            <div>Class: P7</div>
        </div>
        <button onClick={() => setCount(count + 1)}>VOTE</button>
    </div>  
    </>
);
}

export default cards;