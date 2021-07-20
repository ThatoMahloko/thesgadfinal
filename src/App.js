import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import AboutUs from './components/AboutUs';
import Programmes from './components/Programmes';
import Footer from './components/Footer';
import Video from './components/Video';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutUs />
      <Programmes />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
