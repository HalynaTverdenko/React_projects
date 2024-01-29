import React from 'react'
import './Navbar.css'

const Navbar = () => {
    let pageTitle = 'Travel with Us!'
    let links = [
        {id:1, url: '/', title: 'Pradzia'},
        {id:2, url: '/paslaugos', title: 'Paslaugos'},
        {id:3, url: '/apie-mus', title: 'Apie mus'},
        {id:4, url: '/kontaktai', title: 'Kontaktai'}
    ]
  return (
    <div>
      <nav>
            <h1>{pageTitle}</h1>
            <ul>
                {
                    links.map(link => {
                        return <li key={link.id}><a href={link.url}>{link.title}</a></li>
                    })
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
