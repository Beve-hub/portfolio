import React, { useState } from 'react';
import { data } from '../utils/data';

const Mobile = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (index) => {
    setClickedButton(index);
  };

  return (
    <div className="grid md:grid-cols-4 gap-3 mb-[6rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative bg-slate-500 rounded-lg p-3 md:hover:bg-[#9747FF] transition-all duration-300"
        >
          <div>
            <img src={item.image} alt="" className="w-[18rem] h-[12rem] object-cover" />
            <h3 className="font-bold my-3 text-sm text-white">{item.title}</h3>
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
    </div>
  );
};

export default Mobile;
