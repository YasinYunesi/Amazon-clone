import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div className='bg-gray-100'>
      <Router>
        <Switch>
          {/* HomeScreen */}
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          {/* category screen */}
          <Route path='/cart' exact>
            <CartScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
