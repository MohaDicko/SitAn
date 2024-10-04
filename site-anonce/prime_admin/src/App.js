import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/md-light-indigo/theme.css";


import NavBar from "./layout/NavBar";
import SideBar from "./layout/SideBar";
function App() {
  return (
    <PrimeReactProvider >
      <div className="min-h-screen flex relative lg:static surface-ground">
      </div>
    </PrimeReactProvider>
  );
}

export default App;


