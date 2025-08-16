import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code, Zap } from "lucide-react";
import { useState } from "react";

const RightSideBar = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    { name: "Backend", items: ["Node", "Express", "JavaScript", "TypeScript"] },
    {
      name: "Database",
      items: ["MongoDB", "PostgreSQL", "Prisma", "Cloudflare"],
    },
  ];
  return (
    <div className="w-[20rem] mt-1  flex flex-col">
      <div
        className="px-2 py-4 mx-4 flex items-center gap-5 bg-[#E6E6E6]/20 rounded-[0.8rem]
        hover:bg-[#E6E6E6]/50 transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-2 hover:border-white"
      >
        <div>
          <Code color="#EB4E31" size={45} />
        </div>

        <div>
          <h1 className="flex flex-col text-xl">
            <span className="font-bold">Arzaid</span>
          </h1>
        </div>
      </div>

      <div className="mt-2 mx-6 flex flex-col gap-3">
        <p className="opacity-80  text-lg font-medium mb-2">
          I&apos;m Arzaid, living in India. I love to code and develop{" "}
          <span className="text-blue-900">
            Full-stack websites/ applications.
          </span>
        </p>

        <Separator className="bg-gray-300" />

        <h2 className=" text-xl flex gap-2 items-center mt-2 font-semibold tracking-wide">
          <Zap size={20} />
          Skills
        </h2>
        <div className="flex gap-1 mb-2">
          {skills.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              onClick={() => setActiveCategory(category.name)}
              className={`px-2 py-1 text-md font-semibold  ${activeCategory === category.name
                  ? "text-blue-500 bg-gray-100 hover:text-blue-500 "
                  : "font-semibold "
                }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {skills
            .find((cat) => cat.name === activeCategory)
            ?.items.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm  bg-slate-200"
              >
                {skill}
              </Badge>
            ))}


        </div>

        <Separator className="bg-gray-500 mt-5" />

      </div>

      <Footer />
    </div>
  );
};

export default RightSideBar;
