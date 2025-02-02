import React, {useEffect, useState} from "react";

const Cards = ({ userData }) => {
    const [count, setCount] = useState('0');

    useEffect(() => {
        alert(`Thanks for voting. Total votes ${count}`);
    });
return (
  <>

{userData.map((userDat) => (
          <div className="boys mid" key={userDat.id}>
                <div className="imagg">
                <img src={userDat.image} alt={userDat.name} style={{width: "100%", height: "100%", borderRadius: "24px", objectFit: "cover"}} />
                </div>
                <div className="Details">
                    <div className="datailss">{userDat.name}</div>
                    <div className="title">{userDat.age}</div>
                </div>
              <button onClick={(count) => setCount(count + 1)}>VOTE: {count}</button>
          </div>  
    ))}
  </>
  )
}

export default Cards;