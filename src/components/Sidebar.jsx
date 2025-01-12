import React from 'react'
import Personal from './personal'
import data from '../../data.json'

const Sidebar = () => {
  return (
    <div className="sidebars">
      <Personal individual={data}/>
    </div>
  )
}

export default Sidebar
