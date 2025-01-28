import {  GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Info, MailPlus, Zap } from "lucide-react";
import { Separator } from "./ui/separator";
// import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

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

        {/* <Separator className="mt-5 border border-gray-500/30" /> */}

        <h2 className="text-lg md:text-2xl mt-3 md:mt-5 flex gap-1.5 lg:gap-2 items-center font-semibold md:font-bold tracking-wide">
          <Zap className="md:hidden flex" size={16} />
          <Zap className="md:flex hidden" />
          Lets Connect
        </h2>

        <div className="flex items-center ">
          <div className="aspect-square flex-none h-[14px] overflow-hidden relative w-3.5 will-change-transform bg-blue-500 rounded-full"></div>
          <span className="text-lg ml-2">Available for new opportunities</span>
        </div>

        <div className="flex gap-3 flex-wrap mt-3 mb-3 items-center">
          <a
            href="https://github.com/Mohd-Arzaid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className=" h-6 lg:h-6 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>

          <a
            href="https://x.com/__Arzaid__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon className=" h-6 lg:h-6 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
          <a
            href="mailto:arzaid010103@gmail.com?body=Hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailPlus className=" h-6 lg:h-6 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
          <a
            href="https://instagram.com/arzaid._.xd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className=" h-6 lg:h-6 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
        </div>
        <p className=" text-md lg:text-xl whitespace-break-spaces font-normal">
          I&apos;m excited to connect with others via email (
          <a
            href="mailto:arzaid010103@gmail.com?body=Hello"
            rel="noopener noreferrer"
            target="_blank"
            className=" text-blue-500 italic font-bold"
          >
            arzaid010103@gmail.com
          </a>
          ) and{" "}
          <a
            href="https://x.com/__Arzaid__"
            rel="noopener noreferrer"
            target="_blank"
            className="font-bold italic text-blue-500"
          >
            Twitter
          </a>{" "}
          to chat about projects and ideas I&apos;m taking on freelance projects
          and I am open to hearing about potential opportunities, discussing
          them with you and then potentially collaborating if it&apos;s a good
          fit.
        </p>

        {/* <div className="text-md lg:text-xl mt-3 whitespace-break-spaces font-normal">
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
        </div>  */}
      </main>
    </div>
  );
};

export default About;
