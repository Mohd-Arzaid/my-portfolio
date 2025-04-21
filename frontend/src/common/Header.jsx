import TypingAnimation from "@/components/TypingAnimation";

import { Code2, Github, Mail, Terminal, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
       <header className="px-6 py-4 z-10 w-[100vw] lg:w-full flex items-center justify-between bg-[#f9f9f9]">
        <div>
          <h1 className="text-3xl uppercase font-bold tracking-widest">
            <span className="hidden lg:block">Harshad</span>
            <span className="lg:hidden">Harshad</span>
          </h1>
          <span className=" text-sm  items-center mt-1 gap-2 font-medium tracking-widest uppercase hidden lg:flex ">
            <Terminal size={17} className="opacity-70 " />
            <span className="opacity-70 ">Hello World, I am a</span>{" "}
            <TypingAnimation />
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4 ">
          <a
            href="https://github.com/Mohd-Harshad"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <Github className="hidden lg:block" size={20} />
            <Github className="lg:hidden" size={19} />
          </a>
          <a
            href="https://leetcode.com/u/harshad010103/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <Code2 className="hidden lg:block" size={20} />
            <Code2 className="lg:hidden" size={19} />
          </a>
          <a
            href="https://x.com/__Harshad__"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <Twitter className="hidden lg:block" size={20} />
            <Twitter className="lg:hidden" size={19} />
          </a>
          <a
            href="mailto:harshad010103@gmail.com"
            className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            <Mail className="hidden lg:block" size={20} />
            <Mail className="lg:hidden" size={19} />
          </a>
        </div>
      </header>

      <div className="lg:hidden">
        <div className="max-w-[100%] mt-4 mb-5 flex flex-col">
          <div className="mt-2 mx-6 flex flex-col gap-2">
            <span className=" text-sm flex items-center mt-1 gap-2 font-medium tracking-widest uppercase  ">
              <Terminal size={17} className="opacity-70 " />
              <span className="opacity-70 ">Hello World</span>{" "}
            </span>

            <p className="opacity-80  text-lg font-medium mb-2">
              I&apos;m Harshad, living in India. I love to code and develop{" "}
              <span className="text-blue-900">
                Full-stack websites/ applications.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
