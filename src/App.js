// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Components
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import SuccessScreen from "./screens/SuccessScreen";

function App() {
  const sideIsOpen = useSelector((state) => state.sidebar.value.open);

  return (
    <div className={`bg-gray-100 ${sideIsOpen ? "h-screen overflow-y-hidden" : "h-full overflow-y-visible"}`}>
      <Router>
        <Switch>
          {/* HomeScreen */}
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          {/* Basket(cart) screen */}
          <Route path='/cart' exact>
            <CartScreen />
          </Route>
          {/* Seccess screen */}
          <Route path='/success' exact>
            <SuccessScreen />
          </Route>
          {/* Checkout(orders) screen */}
          <Route path='/orders' exact>
            <OrdersScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
