import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Floatingnav from './component/Floatingnav';
import Home from './Page/Home'
import About from './Page/About'
import Blog from './Page/Blog';
import Project from './Page/Project';
import Contact from './Page/Contact';
import Navbar from './component/Navbar';
import Development from './Page/Development';
import Graphics from './Page/Graphics';



function App() {
  return (
   <BrowserRouter>
      <Navbar/>
   <Routes>
    <Route index element={<Home/>} />
    <Route path='About' element={<About/>}/>
    <Route path='Project' element={<Project/>}/>
     <Route path='Blog' element={<Blog/>}/>
     <Route path='Contact' element={<Contact/>}/>
     <Route path='Development' element={<Development/>}/>
     <Route path='Graphics' element={<Graphics/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
