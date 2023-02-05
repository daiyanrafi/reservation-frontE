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
        <Route path={`${process.env.PORT}/`} element={<Home/>}/>
        <Route path={`${process.env.PORT}/hotel`} element={<List/>}/>
        <Route path= {`${process.env.PORT}/hotels/:id`} element={<Hotel/>}/>
        <Route path= {`${process.env.PORT}/login`} element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
