import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';

function App() {
 const [state, setstate] = useState(0)
  useEffect(() => {
    var eventSource = new EventSource("http://localhost:5000/listen")
    
    eventSource.addEventListener("message", function(e) {
      console.log(e.data)
    }, false)

    eventSource.addEventListener("online", function(e) {
      // console.log(e.data.color)
    const  data = JSON.parse(e.data)
    setstate(data.counter)
     console.log(data)
    }, true)
  
  },[]);
  return (
    <div className="App">
      <h1>{state}</h1>
    
    </div>
  );
}

export default App;
