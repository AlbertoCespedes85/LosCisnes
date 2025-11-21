import React from 'react'
import { NavbarUser } from '../components/NavbarUser'
import { Outlet } from 'react-router'
import { Footer } from '../components/footer/Footer'

export const PublicLayouts = () => {
  return (
    <>
    <header>
        <NavbarUser/>
    </header>
    <main>
    <Outlet/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}
