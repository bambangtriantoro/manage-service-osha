import './Home.css'    
import { NavigationBar, Hero,  Solution,  Service,  News,  Footer, } from '../../components/index'
import { useRef } from 'react';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-90)   

function Home() {
  const testRef = useRef(null)
  const scrollToElement = () => scrollToRef(testRef)
  
  return (
    <>      
      <NavigationBar />
      <Hero scrollToElement={scrollToElement} />
      <Solution testRef={testRef}/>
      <Service scrollToElement={scrollToElement}/>
      <News />
      <Footer />
    </>
  );
}

export default Home;
