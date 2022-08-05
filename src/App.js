import './App.css'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import Solution from './components/Solution/Solution';
import Service from './components/Service/Service';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>      
      <NavigationBar />
      <Hero />
      <Solution />
      <Service />
      <News />
      <Footer />
    </>
  );
}

export default App;
