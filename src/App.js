import './App.css';
import { Home } from './Component/UI/Home/Home';
import { ServiceLogin } from './service/ServiceLogin/ServiceLogin';


function App() {
  return (
    <div className="App">
        <Home/>
        <div>
          <ServiceLogin/>
        </div>
    </div>
  );
}

export default App;
