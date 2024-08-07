import logo from './logo.svg';
import './App.css';
import './index.css';
import Button from './components/button'

function App() {
  return (
    <div className="App">
      <Button title="submit" color="red" />
      <Button title="reset" />
      <Button title="click me"/> 
    </div>
  );
}

export default App;
