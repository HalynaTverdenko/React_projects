import React from 'react'
import './Footer.css'

const Footer = () => {
    let pageTitle = 'Kontaktai'
  return (
    <div className="kontaktai">
        <div>
        <h2>{pageTitle}</h2>
      <p>You can find us here:</p>
      <p>Vilnius, Lithuania</p>
      </div>
      <div>
      <form action="email">travelwithus@gmail.com</form>
      </div>
    </div>
  )
}

export default Footer
