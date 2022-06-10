import logo from './logo.svg';
import './App.css';

import { ServiceProduct_Register } from './service/ServiceProduct/ServiceProduct_Register';
import { ServiceProducto_listar } from './service/ServiceProduct/ServiceProducto_listar';
import { ServiceProduct_Search } from './service/ServiceProduct/ServiceProduct_Search';

function App() {
  return (
    <div className="App">
      <ServiceProduct_Search/>
      <hr></hr>
      <ServiceProduct_Register />
      <hr/>
      <ServiceProducto_listar/>
    </div>

  );
}

export default App;
