import {Button} from 'react-bootstrap';
import coraline from './coraline.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Hello Adventurer!</h1>
        <img src={coraline} className="App-logo" alt="logo" />
        <p> Are you ready to explore?</p>

        <Button> let's go! </Button>
      </header>
    </div>
  );
}

export default App;

