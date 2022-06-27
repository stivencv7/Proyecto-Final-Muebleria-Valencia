import { Route , Routes} from "react-router-dom";
import { Home } from './Component/Page/Home/Home';
import 'primereact/resources/themes/saga-green/theme.css'
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import CarouselDemo from './Component/Layout/Carousel/Carousel';
import { HomeAdmin } from './Component/UI/Home/HomeAdmin'
import './Styleheader.css'
import { RegisterUser } from "./Component/Page/RegisterUser/RegisterUser";
import { UsersInterface } from './Component/Layout/UsersInterface/UsersInterface'
import { SuppliersInterface } from './Component/Layout/SuppliersInterface/SuppliersInterface'
import { ProductsInterface } from './Component/Layout/ProductsInterface/ProductsInterface'
import "./contenPageMain.css"
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registerUser" element={<RegisterUser/>}  />
        <Route path="/homeAdmin" element={<HomeAdmin/>}/>
        <Route path="/homeAdmin/usersInterface" element={<UsersInterface/>}/>
        <Route path="/homeAdmin/suppliersInterface" element={<SuppliersInterface/>}/>
        <Route path="/homeAdmin/productsInterface" element={<ProductsInterface/>}/>
      </Routes>
    </div>

  );
}

export default App;
