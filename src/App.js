import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/Root';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    document.title="DevHive"
  },[]);
  return (
    <div className="App">
      <Root/>
    </div>
  );
}

export default App;
