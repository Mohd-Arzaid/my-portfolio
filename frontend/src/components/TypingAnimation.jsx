import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer", 
        1000,                   
        "Freelancer",                    
        1000,                   
      ]}
      wrapper="span"
      speed={50}
      className="text-md flex items-center font-medium tracking-widest uppercase text-blue-900"
      repeat={Infinity}       
    />
  );
};

export default TypingAnimation;
