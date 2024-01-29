import './App.css';
import Komp1 from './components/Komp1'
import Komp2 from './components/Komp2'
import Komp3 from './components/Komp3'
import Komp4 from './components/Komp4'
import Komp5 from './components/Komp5'
import Komp6 from './components/Komp6'
import Naujienos from './components/Naujienos'
import Paslaugos from './components/Paslaugos'

function App() {
  return (
    <div className="App">
      <h1>Naujas puslapis</h1>
      <Komp1 />
      <Komp2 />
      <Komp3 />
      <Komp4 />
      <Komp5 />
      <Komp6 />
      <Naujienos />
      <Paslaugos />
    </div>
  );
}

export default App;

//App.js -> Naujienos.js -> Naujiena.js
//tevines elementas -> /vaikines/child el -> anukines elem
