import {useState} from 'react'
import Development from './Development';
import Graphics from './Graphics';



const Project = () => {
  const [activeTab, setActiveTab] = useState('Development');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
  return (
    <section className=" bg-[#ffff]  grid items-center justify-center py-10">
       <h1 className='flex justify-center font-bold text-slate-800 text-2xl py-20'>Our Amazing Project</h1>              
       <div className="flex justify-center   mb-[4rem]">
        <button
        className={`px-6 py-2 font-semibold rounded-l-lg ${
        activeTab === 'Development' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`} 
        onClick={() => handleTabClick('Development')}>Development</button>
        <button
        className={`px-6 py-2 font-semibold rounded-r-lg ${
        activeTab === 'Graphics' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => handleTabClick('Graphics')}> Graphics</button>
       </div>

       <div>
          {activeTab === 'Development' && <Development/>}
          {activeTab === 'Graphics' && <Graphics/>}
       </div>
    </section>
  )
}

export default Project
