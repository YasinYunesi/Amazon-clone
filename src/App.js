import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

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
