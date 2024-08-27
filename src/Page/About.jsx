import React, { useEffect } from 'react';
import IMG1 from '../Images/picture.png';
import Fig from '../Images/figma 1.png';
import Photoshop from '../Images/photoshop.png';
import illustrate from '../Images/illustrator.png';
import html from '../Images/html 1.png';
import css from '../Images/css.png';
import tailwind from '../Images/tailwindcss.png';
import react from '../Images/react-svgrepo-com.svg';
import mantine from '../Images/mantine-seeklogo.svg';
import next from '../Images/next js.png';
import native from '../Images/react-svgrepo-com (1).svg';
import bootstrap from '../Images/bootstrap-seeklogo.svg';
import redux from '../Images/preact-svgrepo-com.svg';
import superbase from '../Images/super.svg';
import fire from '../Images/firebase-seeklogo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from './ProgressBar';

const skills = {
  design: [
    { icon: Fig },
    { icon: Photoshop },
    { icon: illustrate },
  ],
  frontend: [
    { icon: html},
    { icon: css},
    { icon: bootstrap },
    { icon: react },
    { icon: native},    
    { icon: next },
    { icon: redux },
    { icon: tailwind },
    { icon: mantine}    
  ],
  backend: [
    { icon: fire },
    { icon: superbase },
  ],
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="h-[50rem] bg-[--tetiary-color] flex flex-col md:flex-row items-center px-6 py-12">
      <div className="flex flex-col md:flex-row md:w-full items-center justify-around md:space-x-4">
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='rounded-t-full bg-[#01b8af] sm:flex hidden' data-aos='zoom-in'>
            <img src={IMG1} alt='Profile' className='w-full max-w-[25rem] rounded-t-full ' />
          </div>
        </div>
        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
          <div className='text-white px-4'>
            <h1 className='font-bold text-2xl mb-2 text-center md:text-left'>About</h1>
            <p className='text-md lg:w-[40rem] mb-4'> Hello! I'm a passionate Full Stack Developer from Nigeria with 4 years of experience crafting dynamic web and mobile applications. I specialize in Frontend technologies like React, Next.js, and React Native, and I’m skilled in UI/UX design with Figma. When I’m not coding or designing, you can catch me exploring new projects, sharing insights on Twitter, or making connections on LinkedIn. Let’s build something amazing together! </p>
          </div>
          <div className='px-4'>
            <h2 className="text-lg font-bold mb-2 text-white ">Design Skills (80%)</h2>
            <ProgressBar
              percentage={80}
              tools={skills.design.map(skill => skill.icon)}
            />
            <h2 className="text-lg font-bold mb-2 text-white ">Frontend Skills (50%)</h2>
            <ProgressBar
              percentage={50}
              tools={skills.frontend.map(skill => skill.icon)}
            />
            <h2 className="text-lg font-bold mb-2 text-white ">Backend Skills (40%)</h2>
            <ProgressBar              
              percentage={40}
              tools={skills.backend.map(skill => skill.icon)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
