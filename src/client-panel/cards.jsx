import React, {useEffect, useState} from "react";
import logo from '../assets/jo';

const leaders = ['Vice president', 'Chief prefect', 'Sports prefect'];
let children = leaders.map(leader => leader)
const cards = ({children}) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert(`Thanks for voting. Total votes ${count}`);
    });
render(
    <>
    <div className="cards">
        <img src={logo} alt="image" />
        <p className="title">{children}</p>
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