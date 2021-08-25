import Home from './Home';
import TasteNotWaste from './projects/TasteNotWaste';
import MeetInTheMiddle from './projects/MeetInTheMiddle';
import AMR from './projects/AMR';
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
