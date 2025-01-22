import { Star } from "lucide-react";
import Filters from "./Filters";
import { useState } from "react";
import ShowProjects from "./ShowProjects";
import projectsData from "@/ProjectData/projectsData";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Full Stack");

  return (
    <>
      <div className="main-layout bg-[#EDEDED]  lg:mx-0 flex-1 border-2 border-white  lg:rounded-[1.5rem]  lg:h-[37rem] lg:overflow-auto">
        <main className=" lg:m-8">
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between ">
            <span className="flex text-lg lg:text-xl items-center font-bold justify-center gap-2">
              <Star
                className="hidden lg:block fill-current text-black opacity-70"
                size={20}
              />
              <Star
                className="block lg:hidden fill-current text-black opacity-70"
                size={18}
              />
              <h1 className="tracking-widest opacity-70 uppercase">
                {" "}
                Projects
              </h1>
            </span>

            <Filters onFilterChange={setSelectedCategory} />
          </div>

          <div className="pb-[2rem] mt-8 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[2.5rem] mb-28 lg:mb-0">
            {/* project */}
            <ShowProjects
              projects={projectsData.filter((project) =>
                project.categories.includes(selectedCategory)
              )}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
