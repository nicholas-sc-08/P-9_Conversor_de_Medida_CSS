import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='container_navbar'>
      
        <div className='container_da_imagem_da_navbar'>

            <Link to={`/cadastro`}><img src="Logo_do_projeto.svg" alt="Logo" /></Link>

        </div>

        <h2>Pixel PX to VH VW Viewport conversion</h2>

    </div>
  )
}

export default NavBar
