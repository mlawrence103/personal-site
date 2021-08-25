import Home from './Home';
import TasteNotWaste from './projects/tastenotwaste';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        {/* <div className="App">
        <div className="banner-image">
          <img src={rock_landscape} alt="rocky landscape" />
        </div>
        <p id="hidden-banner-text">Just a nice photo I took...</p>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/taste-not-waste" component={TasteNotWaste} />
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
