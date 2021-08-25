import Home from './Home';
import TasteNotWaste from './TasteNotWaste';
import MeetInTheMiddle from './MeetInTheMiddle';
import AMR from './AMR';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/taste-not-waste" component={TasteNotWaste} />
        <Route exact path="/meet-in-the-middle" component={MeetInTheMiddle} />
        <Route exact path="/autonomous-mobile-robots" component={AMR} />
      </Switch>
    </Router>
  );
}

export default App;
