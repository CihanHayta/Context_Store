import { BrowserRouter,Routes,Route } from "react-router-dom";
import Anasayfa from "./pages/home";
import Sepet from "./pages/basket";
import Header from "./components/header";


export const App = () => {
  return (
    <BrowserRouter>
    
  <Header/>

    <Routes>
    <Route path="/" element ={<Anasayfa />} />
    <Route path="/sepet" element={<Sepet/ >} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;