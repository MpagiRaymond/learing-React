import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import MyChart from './components/chart';
import data from './detailss.json';

const App = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/PHP/server.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name }),
      });
      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
        <Router>
      <section className='sidebars'>
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} />
          <br />
          <button type="submit" name="submit">Submit</button>
        </form>
        <h1>{result}</h1>
        {/* <Sidebar /> */}

        <ul style={{ listStyleType: "none"}}>
           <li style={{ margin: "10px 0" }}> 
              <Link to="/">Home</Link> </li> 
           <li style={{ margin: "10px 0" }}>
              <Link to="/chart">Charts in JavaScript</Link> </li> 
           </ul>
      </section>

      <main className='MainWindow'>
        <div className='container'>
          <Card userData={data} />
        </div>
        <div className="charts">
          <Routes style={{ background: "blue"}}>
            <Route path="/" element={<Sidebar/>}/>
            <Route path="/chart" element={<MyChart />} />
          </Routes>
          {/* <MyChart /> */}
        </div>
      </main>
        </Router>
    </>
  );
};

export default App;
  