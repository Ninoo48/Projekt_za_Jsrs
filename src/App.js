import Home from "./Pages/objekt.js";
import Povijest from "./Pages/Povijest";
import Izleti from "./Pages/Izleti";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/povijest" element={<Povijest />}></Route>
        <Route path="/izleti" element={<Izleti />}></Route>
      </Routes>
    </BrowserRouter>

    
  )
  

}

export default App;
