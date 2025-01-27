import { Code2, TrendingUp } from "lucide-react";

const ShowProjects = ({ projects }) => {
  const handleLiveDemo = (url) => {
    if (url) window.open(url, "_blank");
  };

  const handleSourceCode = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="md:h-[28rem] mx-2 md:mx-0 lg:mb-0 px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white"
        >
          <div
            className="h-[10rem] md:h-[15rem] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          ></div>

          <div className="flex items-center justify-between ">
            <h4 className="font-bold text-2xl">{project.title}</h4>
            <div className="flex gap-3">
              {project.githubCode && (
                <span
                  onClick={() => handleSourceCode(project.githubCode)}
                  className="transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] rounded-md px-3 py-2 cursor-pointer"
                >
                  <Code2 size={18} />
                </span>
              )}
              {project.liveDemo && (
                <span
                  onClick={() => handleLiveDemo(project.liveDemo)}
                  className="transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] rounded-md px-3 py-2 cursor-pointer"
                >
                  <TrendingUp size={18} />
                </span>
              )}
            </div>
          </div>

          <div className="text-gray-700 text-[1rem]">{project.description}</div>

          <div className="flex gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className=" hidden md:block transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] text-xs lg:text-sm rounded-sm lg:rounded-md px-1 py-1 lg:px-3 lg:py-2"
              >
                {tech}
              </span>
            ))}
            {project.techStackMobile.map((tech, index) => (
              <span
                key={index}
                className=" block md:hidden transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] text-sm lg:text-sm rounded-sm lg:rounded-md px-2 py-1 lg:px-3 lg:py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowProjects;
