import React from 'react'
import Navbar from './Navbar';
import{Route,Routes} from "react-router-dom"
import HomeDashboard from './HomeDashboard';
export const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <HomeDashboard/>
    <div className="container">
    </div>
    </>

  )
}
export default Dashboard;