import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Floatingnav from './component/Floatingnav';
import Home from './Page/Home'
import About from './Page/About'
import Blog from './Page/Blog';
import Project from './Page/Project';
import Contact from './Page/Contact';
import UIUX from './Page/UIUX';
import WebDev from './Page/Webdev';

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
    <Route path='UIUX' element={<UIUX/>}/>
    <Route path='WebDev' element={<WebDev/>}/>
    <Route path='Blog' element={<Blog/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
