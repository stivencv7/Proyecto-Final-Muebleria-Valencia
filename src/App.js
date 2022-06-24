import { Route , Routes} from "react-router-dom";
import { Home } from './Component/Page/Home/Home';
import 'primereact/resources/themes/vela-green/theme.css'
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css"; 
import "primereact/resources/themes/lara-light-indigo/theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import CarouselDemo from './Component/Layout/Carousel/Carousel';

import './Styleheader.css'
import { RegisterUser } from "./Component/Page/RegisterUser/RegisterUser";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registerUser" element={<RegisterUser/>}  />
      </Routes>
    </div>

  );
}

export default App;
