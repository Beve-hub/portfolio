import Web from "./Web"
import Project from './Project';
import Contact from "./Contact";
import Footer from "./Footer";
import About from './About';


const Home = () => {
 return (
  <div>
     <Web/>
     <div className="sm:grid hidden">
      <About/>
     <Project/>
     <Contact/>
     <Footer/>
     </div>
  </div>
 

 )
}

export default Home
