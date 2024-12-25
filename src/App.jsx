import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import MyChart from './chart'

const App = () => {
  return (
    <>
    <section className='sidebars'>
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
