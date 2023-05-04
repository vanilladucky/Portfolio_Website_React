import Navbar from './Navbar';
import Welcome from './Welcome';
import Intro from './Intro';
import Projects from './Projects';
import './App.css'
import Contacts from './Contacts'

function App() {
    return (
      <div>
        <Navbar/>
        <Welcome/>
        <Intro/>
        <Projects/>
        <Contacts/>
      </div>
    );
  }
  
  export default App;