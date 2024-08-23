import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Floatingnav from './component/Floatingnav';
import Home from './Page/Home'
import About from './Page/About'
import Blog from './Page/Blog';
import Project from './Page/Project';
import Contact from './Page/Contact';
import Navbar from './component/Navbar';



function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Floatingnav/>
   <Routes>
    <Route index element={<Home/>} />
    <Route path='About' element={<About/>}/>
    <Route path='Project' element={<Project/>}/>
     <Route path='Blog' element={<Blog/>}/>
     <Route path='Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
