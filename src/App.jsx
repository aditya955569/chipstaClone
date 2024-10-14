import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
