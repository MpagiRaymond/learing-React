import React, { useState } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import MyChart from './chart'

const App = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange =(e)=>{
    setName(e.target.value);
  }

  // const handleSubmit = (e) =>{
    // e.preventDefault();
    // const form = $(e.target);
    // const form = document.querySelector('form');
    
    // });
  // };
  return (
    <>
    <section className='sidebars'>
      <form action="http://localhost:8000/PHP/server.php" method="post" >
        <input type="text" id="name" name="name" value={name} onChange={(event) => handleChange(event)}/>
        <br />
        <button type="submit" name="submit">Submit</button>
      </form>
      <h1>{result}</h1>
      <Sidebar/>
    </section>
    <main className='MainWindow'>
    <div className='container'>
      <Card/>
      <Card/>
      <Card/>
      {/* <Card/> */}
    </div>
    <div className="charts">
      <MyChart/>
      <MyChart/>
    </div>
    </main>
    </>
  )
}

export default App
