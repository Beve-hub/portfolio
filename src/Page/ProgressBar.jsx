import React, { useEffect, useState } from 'react';

const ProgressBar = ({ percentage, tools }) => {
  const [progress, setProgress] = useState(0);
  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < percentage) {
        setProgress(prev => Math.min(prev + 1, percentage));
      } else {
        clearInterval(timer);
        setIconsVisible(true);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [percentage, progress]);

  return (
    <div className="w-full max-w-md bg-gray-200 rounded-full h-4 mb-4 relative">
      <div
        className={`bg-blue-600 h-4 rounded-full flex items-center justify-start pl-4 transition-all duration-1000`}
        style={{ width: `${progress}%` }}
      >
        {/* Optional: Add some text or a percentage label here if needed */}
      </div>
      {iconsVisible && (
        <div className="absolute top-0 right-0 w-[8rem] h-6 flex justify-end px-2 mt-1">
          {tools.map((src, index) => (
            <img key={index} src={src} alt={`Skill ${index}`} className="h-4 w-4 ml-1" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
