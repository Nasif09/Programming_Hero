import logo from './logo.svg';
import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';


function App() {
  const [likeColor , setLikeColor] = useState('');


  return (
    <div className="App">
      <ThumbUpIcon onClick={()=>setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpIcon>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
