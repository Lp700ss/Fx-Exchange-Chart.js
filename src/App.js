import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Form from "./Components/Form"
import CurrencyBars from "./Components/CurrencyBars"

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/CurrencyBars" element={<CurrencyBars/>}/>
    </Routes>
    </div>

    
    
  );
}

export default App;
