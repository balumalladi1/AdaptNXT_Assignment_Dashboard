import React from 'react'
import LineChart1 from './components/LineChart1'
import PieChart1 from './components/PieChart1'
import Sidebar from './components/Sidebar/Sidebar'
import "./App.css"


function App() {
  return (
    <>
    <div className="main-container">
   <Sidebar />
    <div className='sub-container'>
      <div className="line-chart-container">
        <LineChart1 />
      </div>
      <div className="pie-chart-container">
        <PieChart1 /> 
      </div>    
    </div>
    </div>
    </>
  )
}

export default App