import './App.css';
import Kosar from './components/kosar/Kosar';
import Termekek from './components/termekek/Termekek';
import { KosarContext } from './context/KosarContext';
import { useContext } from "react"

function App() {

  const{tList, kList} = useContext(KosarContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <main>
        <div className="termekek">
          <Termekek lista={tList} />
        </div>
        <div className="kosar">
          <div className='elemek'>
            <p>Termék</p>
            <p>darab</p>
            <p>ár</p>
          </div>
          <Kosar lista={kList} />
        </div>
      </main>
    </div>
  );
}

export default App;
