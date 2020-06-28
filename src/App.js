import React from 'react';
import './App.css';
//import Welcome from './Componets/Welcome';
import Hello from './Componets/Hello';
//import Hello from './Componets/Hello';
//import Hellllo from './Componets/Hellllo';

function App() {
  return (
    <div className="App">
       {/* <Hello/> */}
       
       <Hello name="EDC" heroName='one'> <p>This is child props
       </p></Hello>
      
       <Hello name="AEC" heroName='two'> <p> This is child props</p> </Hello>
       
       
       <Hello name="CS" heroName='three'><p>This is child props</p> </Hello>
       {/* <Hellllo/> */}
       </div>
  );
}

export default App;
  