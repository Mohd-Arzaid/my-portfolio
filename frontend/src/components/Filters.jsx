
import { useState } from "react";


const Filters = ({ onFilterChange }) => {
 

  const projects = ["Full Stack","Backend", "Frontend", "Landing Pages"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-2 px-2 grid grid-cols-4 items-center gap-3 bg-[#F9F9F9] border-2 border-white rounded-md">
      <span
        className="absolute left-[5px] bg-[#EDEDED] rounded-md transition-all duration-300"
        style={{
          width: "calc(100% / 4 - 10px)",
          height: "calc(100% - 10px)",
          top: "50%",
          transform: `translate(calc(${activeIndex * 100}% + ${
            activeIndex * 10
          }px), -50%)`,
          transition: "transform 300ms cubic-bezier(.95,.03,1,1)",
        }}
      ></span>

      {projects.map((project, index) => (
        <button
          key={index}
          className={`relative px-1 z-10 lg:font-medium uppercase tracking-wider text-xs ${
            activeIndex === index ? "text-[#186867]" : "text-gray-800"

          }`}
           onClick={() => {
            setActiveIndex(index);
            onFilterChange(project);
        
          }}
        >
          {project}
        </button>
      ))}
    </div>
  );
};

export default Filters;
