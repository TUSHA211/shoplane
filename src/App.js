import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router';
import React from 'react';
import Main from './Components/Main/Main';
import Login from './components/Loginpage/Loginpage';


function App() {
  return (
    <div className="App">
  <Routes>

<Route path="/Login" element={<Login/>} ></Route>
<Route path="/" element={<Login/>} ></Route>
<Route path="/Main" element={<Main/>} ></Route>

</Routes>

    </div>
  );
}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       </div>
//   );
// } 


export default App;
