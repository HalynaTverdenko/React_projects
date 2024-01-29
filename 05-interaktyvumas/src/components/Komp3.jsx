import React, {useState, useRef} from 'react'

const Komp3 = () => {
    const [vardas, setVardas] = useState('')

    const inputoRef = useRef()

    const buttonHandler = () => {
        //alert('Paspausta')
        setVardas (inputoRef.current.value)
        inputoRef.current.value = ''

    }



 
  return (
    <div>
      <h2>Komp3</h2>
      <div>
        <label>Vardas:</label>
        <input ref={inputoRef} type="text" />
        <button onClick={buttonHandler}>Ivesti</button>
      </div>
      <p>Jus ivedete: {vardas}</p>
    </div>
  )
}

export default Komp3
