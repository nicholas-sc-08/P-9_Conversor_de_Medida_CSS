import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container_footer'>
        
        <p>Desenvolvido por <Link target='_blank' to='https://github.com/nicholas-sc-08'>Nicholas Serencovich Carvalho</Link></p>

    </div>
  )
}

export default Footer