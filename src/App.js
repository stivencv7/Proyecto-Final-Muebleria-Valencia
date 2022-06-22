import './App.css';
import { Home } from './Component/UI/Home/Home';
import { Route , Routes} from "react-router-dom";
import { ProductsInterface } from './Component/Layout/ProductsInterface/ProductsInterface';
import { ServiceLogin } from './service/ServiceLogin/ServiceLogin';
import { Beds } from './Component/UI/Beds/Beds';
import { HomeUser } from './Component/UI/Home/HomeUser';
import { ServiceUser_Register } from './service/ServiceUser/ServiceUser_Register';
import { Furniture } from './Component/UI/Furniture/Furniture';
import { HomeAdmin } from './Component/UI/Home/HomeAdmin';
import { UsersInterface } from './Component/Layout/UsersInterface/UsersInterface';
import { SuppliersInterface } from './Component/Layout/SuppliersInterface/SuppliersInterface';
import { ShoppingCart } from './Component/UI/ShoppingCart/ShoppingCart';
import { FormRegister } from './Component/Layout/FormRegisterUsers/FormRegister';
import 'primereact/resources/themes/vela-green/theme.css'
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css"; 
import "primereact/resources/themes/lara-light-indigo/theme.css"

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/productsInterface' element={<ProductsInterface/>}/>
        <Route path='/login' element={<ServiceLogin/>}/>
        <Route path='/beds' element={<Beds/>}/>
        <Route path='/homeUser' element={<HomeUser/>}/>
        <Route path='/registerUser' element={<FormRegister/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/homeAdmin' element={<HomeAdmin/>}/>
        <Route path='/usersInterface' element={<UsersInterface/>}/>
        <Route path='/suppliersInterface' element={<SuppliersInterface/>}/>
        <Route path='/shoppingCart' element={<ShoppingCart/>}/>
      </Routes>
    </div>

  );
}

export default App;
