import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Floatingnav from './component/Floatingnav';
import Home from './Page/Home'
import About from './Page/About'
import Blog from './Page/Blog';
import Project from './Page/Project';
import Contact from './Page/Contact';
import Web from './Page/Web';
import Mobile from './Page/Mobile';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Floatingnav/>
   <Routes>
    <Route index element={<Home/>} />
    <Route path='About' element={<About/>}/>
    <Route path='Project' element={<Project/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Web' element={<Web/>}/>
    <Route path='Mobile' element={<Mobile/>}/>
     <Route path='Blog' element={<Blog/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
