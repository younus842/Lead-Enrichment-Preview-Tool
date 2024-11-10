import './App.css';
import SignUp from './components/SignUp';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const [state, setState] = useState("");
const stateObject = {state:state,
  setState:setState
}

  return (
    <div className="App">
        {state ? <HomePage /> : <SignUp stateObject = {stateObject}/>}
    </div>
  );
}

export default App;
