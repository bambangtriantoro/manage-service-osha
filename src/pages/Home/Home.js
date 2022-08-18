import './Home.css'    
import { NavigationBar, Hero,  Solution,  Service,  News,  Footer, } from '../../components/index'

function Home() {
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

export default Home;
