import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter} from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
const Lazyhome = React.lazy(() => import('./pages/home'))


const withSuspense = (Component) => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={withSuspense(Lazyhome)} />
          <Route path="/test" exact render={() => <div> Test 2 </div>} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);