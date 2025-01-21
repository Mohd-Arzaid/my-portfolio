import { Code2, TrendingUp } from "lucide-react"

const ShowProjects = ({projects}) => {
  return (
    <>
    {projects.map(project => (
      <div key={project.id} className="h-[28rem] lg:mb-0 px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white">
        <div className="h-[15rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>

        <div className="flex items-center justify-between mt-1">
          <h4 className="font-bold text-2xl">{project.title}</h4>
          <div className="flex gap-3">
            <span className="transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] rounded-md px-3 py-2">
              <Code2 size={18} />
            </span>
            <span className="transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] rounded-md px-3 py-2">
              <TrendingUp size={18} />
            </span>
          </div>
        </div>

        <div className="text-gray-700 text-[1rem]">{project.description}</div>

        <div className="flex gap-3">
          {project.techStack.map((tech, index) => (
            <span key={index} className="transition duration-300 text-black ease-in-out bg-[#dad3d3] hover:bg-[#b4a0a0] text-xs lg:text-sm rounded-sm lg:rounded-md px-1 py-1 lg:px-3 lg:py-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
   

  )
}

export default ShowProjects
