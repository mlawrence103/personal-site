import Home from './Home';
import TasteNotWaste from './projects/TasteNotWaste';
import MeetInTheMiddle from './projects/MeetInTheMiddle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/taste-not-waste" component={TasteNotWaste} />
        <Route exact path="/meet-in-the-middle" component={MeetInTheMiddle} />
      </Switch>
    </Router>
  );
}

export default App;
