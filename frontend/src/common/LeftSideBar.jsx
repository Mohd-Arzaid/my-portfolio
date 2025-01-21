import { Code, Info, Terminal, Upload, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";


const LeftSideBar = () => {


  const navItems = [

    {
      icon: <Terminal size={32} />,
      title: "Projects",
      link: "/",
    },
    {
      icon: <Info size={32} />,
      title: "About",
      link: "/about",
    },
    {
      icon: <UserRound size={32} />,
      title: "Contact",
      link: "/contact",
    },
  ];

  const navItemsMobile = [

    {
      icon: <Terminal size={25} />,
      title: "Projects",
      link: "/",
    },
    {
      icon: <Info size={25} />,
      title: "About",
      link: "/about",
    },
    {
      icon: <UserRound size={25} />,
      title: "Contact",
      link: "/contact",
    },
  ];


  return (
    <>
      {/* Sidebar visible only on large screens */}
      <div className="basis-[5rem]  flex-col bg-[#f9f9f9] min-h-screen lg:flex hidden">
        <div className="flex items-center mt-1 justify-center h-[5rem]">
          <Code color="#EB4E31" size={50} />
        </div>

        <div className="mt-7 flex-1 flex flex-col items-center justify-between">
          <ul className="flex flex-col gap-12 ">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? "text-[#3aafae]" : "text-[#656574]"
                  }
                >
                  {item.icon}
                </NavLink>
                <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-11 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="mb-16">
            <button className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31] p-2 rounded-full">
              <Upload color="#EB4E31" size={24} />
            </button>

          </div>
        </div>
      </div>

      {/* mobile sidebar */}
      <section className="fixed z-50 md:w-[40rem] md:m-auto lg:hidden bottom-10 left-0 right-0 flex flex-wrap justify-center w-full">
        <div className="border-black/10 dark:border-white/10 flex gap-3 flex-wrap items-center w-[80%] justify-between p-2 bg-black/20 dark:bg-white/5 backdrop-blur-lg border-2 rounded-full">
          {navItemsMobile.map((item, index) => (
            <NavLink
              key={index} // Kept index as key
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#3c3939] dark:bg-white/30 rounded-full text-white dark:text-black p-2"
                  : "text-black dark:text-white p-2"
              }
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
      </section>


    </>
  );
};

export default LeftSideBar;
