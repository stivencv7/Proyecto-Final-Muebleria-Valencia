import './App.css';
//import { Home } from './Component/UI/Home/Home';
//import { ServiceLogin } from './service/ServiceLogin/ServiceLogin';


import { ServiceProduct_Register } from './service/ServiceProduct/ServiceProduct_Register';
import { ServiceProducto_listar } from './service/ServiceProduct/ServiceProducto_listar';
import { ServiceProduct_Search } from './service/ServiceProduct/ServiceProduct_Search';



function App() {
  return (
    <div className="App">

      <ServiceProduct_Search />
      <hr></hr>
      <ServiceProduct_Register />
      <hr />
      <ServiceProducto_listar />
      {/*  
        <Home/>
        <div>
          <ServiceLogin/>
        </div>
      */}

    </div>

  );
}

export default App;
