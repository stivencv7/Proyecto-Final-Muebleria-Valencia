import './App.css';
import { Home } from './Component/UI/Home/Home';
import { Route , Routes} from "react-router-dom";
import { ProductsInterface } from './Component/Layout/ProductsInterface/ProductsInterface';
import { ServiceLogin } from './service/ServiceLogin/ServiceLogin';
import { Beds } from './Component/UI/Beds/Beds';
import { HomeUser } from './Component/UI/Home/HomeUser';
import { ServiceUser_Register } from './service/ServiceUser/ServiceUser_Register';
import { Furniture } from './Component/UI/Furniture/Furniture';



function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/productsInterface' element={<ProductsInterface/>}/>
        <Route path='/login' element={<ServiceLogin/>}/>
        <Route path='/beds' element={<Beds/>}/>
        <Route path='/homeUser' element={<HomeUser/>}/>
        <Route path='/registerUser' element={<ServiceUser_Register/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
      </Routes>
    </div>

  );
}

export default App;
