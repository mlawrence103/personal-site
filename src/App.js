import About from './About';
import Skills from './Skills';
import rock_landscape from './images/rock_landscape.jpg';

function App() {
  return (
    <div className="App">
      <div className="banner-image">
        <img src={rock_landscape} alt="rocky landscape" />
      </div>
      <About />
      <Skills />
    </div>
  );
}

export default App;
