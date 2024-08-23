import Web from "./Web"
import Project from './Project';
import Contact from "./Contact";
import Footer from "./Footer";


const Home = () => {
 return (
  <div>
     <Web/>
     <div className="sm:grid hidden">
     <Project/>
     <Contact/>
     <Footer/>
     </div>
  </div>
 

 )
}

export default Home
