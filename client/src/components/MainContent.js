import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Dashboard, Profile,Vehicle } from '../pages'


const MainContent = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='profile' element={<Profile></Profile>}></Route>
      <Route path='vehicle' element = {<Vehicle></Vehicle>}></Route>
    </Routes>
    </>
  )
}

export default MainContent