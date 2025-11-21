import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PublicLayouts } from '../layouts/PublicLayouts'
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"))
const Reservation = lazy (() => import("../pages/Reservation/Reservation"))
const Apartments = lazy (() => import("../pages/Apartaments/Apartaments"))
export const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<PublicLayouts/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/reservation' element={<Reservation/>} />
                <Route path='/apartments/:id' element={<Apartments/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
