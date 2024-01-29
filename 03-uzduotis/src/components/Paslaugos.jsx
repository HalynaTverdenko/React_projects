import React from 'react'
import './Paslaugos.css'

const Paslaugos = () => {
    let pageTitle = 'Paslaugos'
  let paslaugos = [
    { id: 1, pavadinimas: 'Lithuania', info: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ` },
    { id: 2, pavadinimas: 'Spain', info: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).` },
    { id: 3, pavadinimas: 'United Kingdom', info: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.` },
  ]
  return (
    <div>
        <div className='paslaugos-wrapper'>
        <h2>{pageTitle}</h2>
        <div className='paslaugos-list'>
            {
              paslaugos.map(paslauga => {
                return <div key={paslauga.id} className='paslaugos-blokas'>
                        <h3>{paslauga.pavadinimas}</h3>
                        <p>Informacija: {paslauga.info}</p>
                      </div>
              })
            }
        </div>
    </div>
      
    </div>
  )
}

export default Paslaugos
