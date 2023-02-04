import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="https://backend-i21i.onrender.com/" element={<Home/>}/>
        <Route path="https://backend-i21i.onrender.com/hotels" element={<List/>}/>
        <Route path="https://backend-i21i.onrender.com/hotels/:id" element={<Hotel/>}/>
        <Route path="https://backend-i21i.onrender.com/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
