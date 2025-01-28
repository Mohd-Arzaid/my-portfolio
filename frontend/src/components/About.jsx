import { Info, Zap } from "lucide-react";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <div className="main-layout bg-[#EDEDED]  lg:mx-0 flex-1 border-2 border-white  lg:rounded-[1.5rem] pb-28 lg:mb-0 lg:h-[37rem] lg:overflow-auto">
      <main className="m-5 md:m-8">
        <h1 className="text-3xl lg:text-4xl text-center font-bold tracking-wide">
          Hi. I&apos;m{" "}
          <span className=" text-balance text-blue-500">Mohd Arzaid</span>
        </h1>

        <h2 className="text-lg md:text-2xl mt-4 md:mt-2 flex gap-1.5 lg:gap-2 items-center font-semibold md:font-bold tracking-wide">
          <Info className="md:hidden flex" size={16} />
          <Info className="md:flex hidden" />
          Short Bio
        </h2>

        <p className="text-md lg:text-xl mt-2 flex flex-col gap-2 whitespace-break-spaces font-normal">
          <span>
            I love building software that solves real world problems which is
            probably why everything I build is{" "}
            <a
              href="https://github.com/Mohd-Arzaid"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold text-green-500"
            >
              Open Source
            </a>
            .
          </span>

          <span>
            My everyday tech stack includes{" "}
            <span className="font-bold">
              ReactJS , Javascript , Tailwind , and so on....{" "}
            </span>
            (the list goes long lol 🔋) and{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-lg text-blue-500 font-bold uppercase"
            >
              VSCODE
            </a>{" "}
            for IDE .
          </span>
        </p>

        <Separator className="mt-5 border border-gray-500/30" />

        <h2 className="text-lg md:text-2xl mt-4 md:mt-5 flex gap-1.5 lg:gap-2 items-center font-semibold md:font-bold tracking-wide">
          <Zap className="md:hidden flex" size={16} />
          <Zap className="md:flex hidden" />
          Experience
        </h2>
        <div className="text-md lg:text-xl mt-3 whitespace-break-spaces font-normal">
          <span>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold tracking-wide text-md md:text-xl">
                Full Stack Developer 
              </h3>
              <div className="flex items-center justify-between gap-1 md:gap-2 font-semibold text-xs md:text-sm italic">
                <p className="text-gray-500">June 2024 - Jan 2024</p>
                <p className="md:flex hidden text-gray-500">KGI Services, New Delhi</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 md:mt-3">
              <li>
                Built a fully responsive website using MERN stack with dynamic
                content and UI/UX friendly.
              </li>
              <li>
                Integrated career page for job search, applications, and
                location filters.
              </li>
              <li>
                Managed the backend system integration and dynamic content
                updates through an admin dashboard.
              </li>
              <li>
                Developed custom dashboards for affiliate marketing and email
                marketing.
              </li>
            </ul>
          </span>
        </div>
      </main>
    </div>
  );
};

export default About;
