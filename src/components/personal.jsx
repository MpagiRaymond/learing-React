import React from 'react';

const Personal = ({ individual }) => {
// function personal({individual}){
 return   ( <>
    {individual.map((indivi) => (
    <div key={indivi.id}>{indivi.skills}</div>
    ))}
    </>
 )
}

export default Personal;