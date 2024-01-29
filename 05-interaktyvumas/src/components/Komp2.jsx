import React, {useState} from 'react'

const Komp2 = () => {
    const [vardas, setVardas] = useState('') 


    const inputHandler = (event) => {
        //console.log(event.target.value)
        setVardas(event.target.value)
    }

    const vardasLength = () => {
        return vardas.length
    }

    const [pirmasZodis, setPirmasZodis] = useState('-')
    const [antrasZodis, setAntrasZodis] = useState('-')

    const pirmasHandler = (event) => {
        setPirmasZodis(event.target.value)
    }

    const antrasHandler = (event) => {
        setAntrasZodis(event.target.value)
    }

  return (
    <div>
        <h2>Komp2</h2>
        <label htmlFor="nameInput">Vardas: </label>
        <input type="text" id='nameInput' onChange={inputHandler} />
        <p>Jus ivedete: {vardas}</p>
        <p>Simboliu kiekis: {vardasLength()}</p>

        <div>
            <label>Pirmas zodis: </label>
            <input type="text" onChange={pirmasHandler} />
        </div>
        <div>
            <label>Antras zodis: </label>
            <input type="text" onChange={antrasHandler} />
        </div>
        <p><strong>Ivesti zodziai: </strong> {pirmasZodis} ir {antrasZodis}</p>
      
    </div>
  )
}

export default Komp2
