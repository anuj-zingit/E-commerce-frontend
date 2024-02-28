import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom"; 
import { Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider';
import Detail from './component/product/Detail'; 
import Cart from './component/cart/Cart';
function App() {
  return (
    <DataProvider>
      <div className='HeaderComponent'>
        <Header/>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path='/cart' element={<Cart/>}/>
     </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
