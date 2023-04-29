import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Signin from "./components/pages/Sign";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard"

import { useSelector } from "react-redux";

function App() {

  const {access_token} = useSelector(state=> state.auth)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Signin" element={!access_token?<Signin/>:<Navigate to="/dashboard"/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
      <Route path="/dashboard" element={access_token?<Dashboard/>:<Navigate to="/signin"/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
