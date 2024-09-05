import { BrowserRouter} from "react-router-dom";
import "./App.css";

import renderRoutes, { routes } from './routes';
function App() {
  return (
    <BrowserRouter>
     {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
