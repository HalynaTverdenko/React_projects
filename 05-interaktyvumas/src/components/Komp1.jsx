import React, {useState} from 'react'

const Komp1 = () => {
    const pirmasHandler = () => {alert('Paspausta')}
    const antrasHandler = () => {alert('Paspausta')}
    const treciasHandler = () => {alert('Paspausta')}
    const counterHandler= () => {
        setCounter(counter + 1)
    }

    const [counter, setCounter] = useState(0)

    const newCounterHandler = (changeValue) => {
        //alert(changeValue)
        if(changeValue === 0) {
            setCounter(0)
        } else {
            setCounter(counter + changeValue)
        }

    }

  return (
    <div>
      <h2>Komp1</h2>
      <button onClick={pirmasHandler}>Pirmas</button>
      <button onClick={antrasHandler}>Antras</button>
      <button onClick={treciasHandler}>Trecias</button>

      <div>
        <h2>Counter</h2>
        <button onClick={counterHandler}>Spausti</button>
        <p>Buvo paspausta: {counter}</p>
      </div>

      <div>
        <h2>Skaiciavimai</h2>
        <button onClick={() => newCounterHandler(1)}>+ 1</button>
        <button onClick={() => newCounterHandler(-1)}>- 1</button>
        <button onClick={() => newCounterHandler(5)}>+ 5</button>
        <button onClick={() => newCounterHandler(-5)}>- 5</button>
        <button onClick={() => newCounterHandler(0)}>= 0</button>

        <p>Counter reiksme: {counter}</p>

      </div>
    </div>
  )
}

export default Komp1
