import React, { useRef, useState } from "react";


import { MailPlus, Nfc } from "lucide-react";



const Contact = () => {
 
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef(null);



  const handleMessageChange = (event) => {
      setMessage(event.target.value);
  };
  return (
    <div className="main-layout bg-[#EDEDED]  lg:mx-0 flex-1 border-2 border-white  lg:rounded-[1.5rem] mb-32 lg:mb-0 lg:h-[37rem] lg:overflow-auto">
       <div className="flex justify-center m-5 items-center gap-5 flex-col" id="contact">
            <h1 className=" capitalize font-bold text-4xl relative lg:text-4xl tracking-wide">
                Contact Me <span className="  text-8xl lg:text-[9rem] animate-pulse absolute lg:-bottom-2 bottom-0">.</span>
            </h1>
            <span className=" font-normal text-sm md:text-lg text-center">
                Shoot me an email if you want to connect! You can also find me on{" "}
                <a className=" text-blue-500 font-bold" href="https://x.com/__Arzaid__" target="_blank">
                    Twitter
                </a>{" "}
                if that&apos;s more your speed.
            </span>
            <a href="mailto:arzaid010103@gmail.com?body=Hello" target="_blank" className="flex items-center gap-2 text-xl font-medium">
                <MailPlus /> arzaid010103@gmail.com
            </a>
            <form className="flex flex-col w-full lg:w-[80%] gap-4" autoComplete="off" ref={form}>
                <div className="flex justify-center items-center flex-wrap gap-3 w-full">
                    <input type="text" placeholder="Please Enter Your Full Name" className=" duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black flex-1 border-2  rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent" name="to_name" required />
                    <input type="email" placeholder="Please Enter Your Email" className=" duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black flex-1 border-2  rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent" name="from_name" required />
                </div>
                <textarea placeholder="Enter Your Message" className=" duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black bg-transparent h-64 dark:border-white/40 border-black/40 p-4 rounded-lg w-full flex-auto  border-2" required autoComplete="false" name="message" value={message} onChange={handleMessageChange}></textarea>
                {loading ? (
                    <button className="flex justify-center items-center boxshadowbtn gap-3 " disabled>
                        <ScaleLoader color="#808080" className=" scale-50" /> Processing.....
                    </button>
                ) : (
                    <button className="flex justify-center items-center gap-3 boxshadowbtn">
                        <Nfc />
                        Contact
                    </button>
                )}
            </form>
        </div>
      
   
    </div>
  )
}

export default Contact
