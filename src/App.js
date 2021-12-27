import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";

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
          <Route path='/category/:category' exact>
            <CategoryScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
