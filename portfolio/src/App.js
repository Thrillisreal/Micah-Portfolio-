import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <Switch>
        <Route exact path='/'/>
        <Route exact path='/'/>
        <Route exact path='/'/>
        <Route exact path='/'/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
