import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import {Switch,Route,Link} from "react-router-dom";
import Checkout from "./components/Checkout";
import Thanks from './components/Thanks'
export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
            <Route  path="/register">
             <Register />
            </Route>
            <Route  path="/login">
              <Login />
            </Route>  
            <Route  path="/">
             <Products /> 
            </Route>
            <Route  path="/checkout">
             <Checkout /> 
            </Route>
            <Route  path="/Thanks">
             <Thanks /> 
            </Route>
            
        </Switch>
        

    </div>
    </BrowserRouter>
  );
}

export default App;
