import React, { useState } from 'react';
import { graphData } from '../utils/grapData';

const Graphics = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (index) => {
    setClickedButton(index);
  };

  return (
    <div className="grid md:grid-cols-4 gap-3 mb-[6rem]">
      {graphData.map((item, index) => (
        <div
          key={index}
          className="relative bg-slate-500 rounded-lg p-2 md:hover:bg-[#9747FF] transition-all duration-300"
        >
          <div className="relative">
            <img
              src={item.image}
              alt=""
              className="w-[20rem] h-[15rem] object-cover"
            />
            <p
              className="absolute top-3 right-0 px-2 text-md text-[#ffffff] bg-slate-600 rounded-l-lg"
            >
              {item.title}
            </p>

            {/* Buttons */}
            <div className="absolute inset-x-0 bottom-3 left-0 flex gap-2 justify-center opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
              <button
                className={`px-8 py-2 rounded-lg flex justify-center transition-colors duration-300 ${
                  clickedButton === `${index}-behance`
                    ? 'bg-transparent border-2 border-[#09349a] text-[#09349a]'
                    : 'bg-[#09349a] text-white'
                }`}
                onClick={() => handleClick(`${index}-behance`)}
              >
                <a href={item.behanceURL}>View</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Graphics;
