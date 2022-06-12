import './App.css';
import { Home } from './Component/UI/Home/Home';
import { Route , Routes} from "react-router-dom";
import { ProductsInterface } from './Component/Layout/ProductsInterface/ProductsInterface';
import { ServiceLogin } from './service/ServiceLogin/ServiceLogin';



function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/productsInterface' element={<ProductsInterface/>}/>
        <Route path='/login' element={<ServiceLogin/>}/>
      </Routes>

    </div>

  );
}

export default App;
