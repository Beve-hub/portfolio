import { link } from './../data';
import { lint } from './../data';
import IMG1 from '../Images/picture.jpg'
import 'aos/dist/aos.css'
import Fig from '../Images/figma 1.png';
import Photoshop from '../Images/photoshop.png';
import tailwind from '../Images/tailwindcss.png';
import react from '../Images/react-svgrepo-com.svg';
import mantine from '../Images/mantine-seeklogo.svg';
import next from '../Images/next js.png';
import native from '../Images/react-svgrepo-com (1).svg';
import bootstrap from '../Images/bootstrap-seeklogo.svg';
import node from '../Images/pngwing.com (1).png';
import mongo from '../Images/pngwing.com.png';
import express from '../Images/pngwing.com (3).png';
import fire from '../Images/firebase-seeklogo.svg';
import 'aos/dist/aos.css';
import ProgressBar from './ProgressBar';
import { useState} from 'react';
import { data } from '../utils/data';
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi2";
const skills = {
  design: [
    { icon: Fig },
    { icon: Photoshop },
      ],
  frontend: [
    { icon: bootstrap },
    { icon: react },
    { icon: native},    
    { icon: next },
    { icon: tailwind },
    { icon: mantine}    
  ],
  backend: [
    { icon: fire },
    { icon: express },
    { icon: node },
    { icon: mongo },
  ],
};


const Web = () => {
 
  
  const [clickedButton, setClickedButton] = useState(null);
  const [devPage, setDevPage] = useState(0); // Separate state for Development section
  const [desPage, setDesPage] = useState(0); // Separate state for Design section

  const handleClick = (index) => {
    setClickedButton(index);
  };

  const page = 4;

  const fillterDev = data.filter((item) => item.URL);
  const fillterDes = data.filter((item) => item.behanceURL);

const displayDev = fillterDev.slice(
  devPage * page,
  (devPage + 1) * page
);

const displayDes = fillterDes.slice(
  desPage * page,
  (desPage + 1) * page
);

  return (
    <section className="h-screen px-4 lg:px-10 pt-8">
      <div className="flex flex-col lg:flex-row items-start justify-between pt-10 lg:pt-20 h-full gap-6">
        {/* Contact Side */}
        <div className="lg:basis-1/4 w-full bg-[--tetiary-color] p-6 rounded-[1rem]">
          <div>
            <img src={IMG1} alt="" className="w-full max-w-[7rem] rounded-full mx-auto lg:mx-0" />
          </div>

          <div className="mt-4 text-center lg:text-left">
            <h1 className="text-2xl font-medium">Okeke Victor Chinemere</h1>
            <p className="text-md">Full Stack Developer</p>
            <p className="text-sm text-[--gray-color]">Lagos, Nigeria</p>
          </div>

          <div className="flex gap-2 mt-4 justify-center lg:justify-start">
            {link.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#9747FF] bg-[--secondary-color] gap-3 p-2 rounded text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-[--gray-color] font-medium">About</p>
            <p className="text-sm mt-2">
              Passionate about driving innovation, I seek a dynamic role where I can leverage my
              full-stack development skills to build scalable and efficient solutions. Eager to grow
              professionally, I aim to deliver impactful contributions through strategic
              problem-solving and cutting-edge technology in a challenging environment.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-[--gray-color] font-medium">Skill Set</p>
            <div className="px-4 mt-4">
              <h2 className="text-sm text-[--gray-color] font-medium">Design Skills (80%)</h2>
              <ProgressBar percentage={80} tools={skills.design.map((skill) => skill.icon)} />
              <h2 className="text-sm text-[--gray-color] font-medium">Frontend Skills (60%)</h2>
              <ProgressBar percentage={60} tools={skills.frontend.map((skill) => skill.icon)} />
              <h2 className="text-sm text-[--gray-color] font-medium">Backend Skills (30%)</h2>
              <ProgressBar percentage={30} tools={skills.backend.map((skill) => skill.icon)} />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-[--gray-color] font-medium">Contact</p>
            <div className="flex gap-2 mt-4 justify-center lg:justify-start">
              {lint.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#9747FF] bg-[--gray-color] gap-3 p-2 rounded text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Project Side */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-semibold">Projects</h2>
         
          
           {/* Development Section */}
           <div className='flex justify-between items-center my-6'>
            <h1 className="mt-4 text-md text-[--gray-color]">Development</h1>
            <button className='text-[--secondary-color]'>
              <a href='/project' className='flex items-center'>
            More <HiChevronDoubleRight  /></a></button>
            
            </div>
           <div className="mb-2 bg-white p-6 rounded-[1rem] shadow-lg">            
            <div className="flex gap-2 overflow-hidden relative">
              <button
                onClick={() => setDevPage((prev) => Math.max(prev - 1, 0))}
                className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 opacity-100"
                disabled={devPage === 0}
              >
                < FaChevronLeft size={24} />
              </button>
              {displayDev.map((item, index) => (
                <div
                key={index}
                className="relative bg-[--tetiary-color] rounded-lg p-3 md:hover:bg-[#9747FF] transition-all duration-300"
              >
                <div>
                  <img src={item.image} alt="" className="w-[18rem] h-[12rem] object-cover" />
                  <h3 className="font-bold my-3 text-sm ">{item.title}</h3>
                  <p className="w-[16rem] text-[#121212e6] text-xs">
                    {item.description.slice(0, 150)}...
                  </p>
      
                  <div className="absolute inset-x-0 bottom-3 left-0 flex gap-4 justify-center opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
                    {item.behanceURL && (
                      <button
                        className={`px-8 py-2 rounded-lg flex justify-center transition-colors duration-300 ${
                          clickedButton === `${index}-behance`
                            ? 'bg-transparent border-2 border-[#09349a] text-[#09349a]'
                            : 'bg-[#09349a] text-white'
                        }`}
                        onClick={() => handleClick(`${index}-behance`)}
                      >
                        <a href={item.behanceURL} target="_blank" rel="noopener noreferrer">
                          Behance
                        </a>
                      </button>
                    )}
                    {item.URL && (
                      <button
                        className={`px-8 py-2 rounded-lg flex justify-center transition-colors duration-300 ${
                          clickedButton === `${index}-url`
                            ? 'bg-transparent border-2 border-[#0f131c] text-[#0f131c]'
                            : 'bg-[#0f131c] text-white '
                        }`}
                        onClick={() => handleClick(`${index}-url`)}
                      >
                        <a href={item.URL} target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              ))}
              <button
                onClick={() => setDevPage((prev) => prev + 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 opacity-100"
                disabled={(devPage + 1) * page >= fillterDev.length}
              >
                <FaChevronRight  size={24} />
              </button>
            </div>
          </div>

            {/* Design Section */}
            <div className='flex justify-between items-center my-6'>
            <h1 className="mt-4 text-md text-[--gray-color]">UI Design </h1>
            <button className='text-[--secondary-color]'>
              <a href='/project' className='flex items-center'>
            More <HiChevronDoubleRight  /></a>
            </button>
            
            </div>
            <div className="mb-2 bg-white p-6 rounded-[1rem] shadow-lg">
            <p className="mt-4 text-sm text-[--gray-color]"></p>
            <div className="flex gap-2 overflow-hidden relative">
              <button
                onClick={() => setDesPage((prev) => Math.max(prev - 1, 0))}
                className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 opacity-100"
                disabled={desPage === 0}
              >
                < FaChevronLeft size={24} />
              </button>
              {displayDes.map((item, index) => (
                <div
                key={index}
                className="relative bg-[--tetiary-color] rounded-lg p-3 md:hover:bg-[#9747FF] transition-all duration-300"
              >
                <div>
                  <img src={item.image} alt="" className="w-[18rem] h-[12rem] object-cover" />
                  <h3 className="font-bold my-3 text-sm text-[--priary-color]">{item.title}</h3>
                  <p className="w-[16rem] text-[#121212e6] text-xs">
                    {item.description.slice(0, 150)}...
                  </p>
      
                  <div className="absolute inset-x-0 bottom-3 left-0 flex gap-4 justify-center opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
                    {item.behanceURL && (
                      <button
                        className={`px-8 py-2 rounded-lg flex justify-center transition-colors duration-300 ${
                          clickedButton === `${index}-behance`
                            ? 'bg-transparent border-2 border-[#09349a] text-[#09349a]'
                            : 'bg-[#09349a] text-white'
                        }`}
                        onClick={() => handleClick(`${index}-behance`)}
                      >
                        <a href={item.behanceURL} target="_blank" rel="noopener noreferrer">
                          Behance
                        </a>
                      </button>
                    )}
                    {item.URL && (
                      <button
                        className={`px-8 py-2 rounded-lg flex justify-center transition-colors duration-300 ${
                          clickedButton === `${index}-url`
                            ? 'bg-transparent border-2 border-[#0f131c] text-[#0f131c]'
                            : 'bg-[#0f131c] text-white '
                        }`}
                        onClick={() => handleClick(`${index}-url`)}
                      >
                        <a href={item.URL} target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              ))}
              <button
                onClick={() => setDesPage((prev) => prev + 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 opacity-100 z-10"
                disabled={(desPage + 1) * page >= fillterDes.length}
              >
                <FaChevronRight  size={24} />
              </button>
            </div>
              </div>          
          
        </div>
      </div>
    </section>
  );
};

export default Web;
