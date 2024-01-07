import React from "react";
import HTML from "./Images/html.png";
import CSS from "./Images/css.png";
import JavaScript from "./Images/javascript.png";
import ReactImg from "./Images/react.png";
import MUI from "./Images/mui.png";
import FireBase from "./Images/firebase.png";
import GitHub from "./Images/github.png";
import Tailwind from "./Images/tailwind.png";
import FramerMotion from "./Images/framer-motion.png";

const skills = [
  {
    name: "HTML",
    img: HTML,
  },
  {
    name: "CSS",
    img: CSS,
  },

  {
    name: "JAVASCRIPT",
    img: JavaScript,
  },
  {
    name: "REACT",
    img: ReactImg,
  },
  {
    name: "TAIWIND",
    img: Tailwind,
  },
  {
    name: "MUI",
    img: MUI,
  },
  {
    name: "FRAMER MOTION",
    img: FramerMotion,
  },
  {
    name: "FIREBASE",
    img: FireBase,
  },
  {
    name: "GITHUB",
    img: GitHub,
  },
];

const Skills = () => {
  return (
    <div className="w-full pb-[30px] bg-black text-gray-300 pt-9 px-5">
      <div className="max-w-[1000px] mx-auto pb-4 flex flex-col justify-center w-full h-full">
        <div className="mb-8 pl-3">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-green-300">
            Skills
          </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8">
          {skills.map((skill) => (
            <div className="my-3 md:m-auto shadow-lg shadow-gray-800 md:w-[200px] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={skill.img} alt="icon" />
              <p className="my-4 ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
