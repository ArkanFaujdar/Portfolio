import Cryptofy from "./Images/Web1.png";
import UsePopcorn from "./Images/Web2.png";
import SplitPay from "./Images/Web3.png";
import InventoTrack from "./Images/Web4.png";
import React from "./Images/react.png";
import MUI from "./Images/mui.png";
import FireBase from "./Images/firebase.png";
import Tailwind from "./Images/tailwind.png";

const data = [
  {
    name: "Cryptofy.",
    image: Cryptofy,
    technologies: [React, Tailwind],
    link: "https://arkanfaujdar-cryptofy.netlify.app/",
    description:
      "The project is a simple landing page for a firm developed using ReactJS and TailwindCSS. It involves dynamic features that is developed using react-typed module.",
  },
  {
    name: "UsePopcorn.",
    image: UsePopcorn,
    technologies: [React, Tailwind],
    link: "https://arkanfaujdar-usepopcorn.netlify.app/",
    description:
      "It is a web application where you can browse movies and create a watchlist of your. The project is developed using ReactJS and Tailwind CSS.",
  },
  {
    name: "InventoTrack.",
    image: InventoTrack,
    link: "https://arkanfaujdar-inventotrack.netlify.app/",
    technologies: [React, Tailwind, FireBase, MUI],
    description:
      "A web based application that helps you track your inventory efficiently. The application is developed using ReactJS. The application uses FireStore(Firebase) i.e is a cloud storage to store your inventory data on cloud. The user can update the inventory data using the user interface.",
  },
  {
    name: "SplitPay.",
    image: SplitPay,
    technologies: [React, Tailwind],
    link: "https://arkanfaujdar-splitpay.netlify.app/",
    description:
      "It is an web application where you can split bills with you friend. It is a web application developed in ReactJS. For the styling purpose I have used TailwindCSS and it is a responsive website.",
  },
];

function Portfolio() {
  return (
    <div className="w-full text-gray-300 bg-black px-5 pt-9">
      <div className="max-w-[900px] m-auto pb-10">
        <div className="mb-8 pl-3">
          <p className="text-3xl inline font-bold border-b-4 border-green-300 items-center">
            Portfolio
          </p>
        </div>

        {data.map((data) => (
          <div className="grid md:grid-cols-3 mt-10 shadow-lg shadow-gray-800 my-2 p-6">
            <a href={data.link} target="_blank" rel="noreferrer">
              <img
                src={data.image}
                alt="project"
                className="border-[1px] border-gray-900"
              />
            </a>

            <div className="mt-5 md:mt-auto md:col-span-2 md:ml-[30px]">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
                <a href={data.link} rel="noreferrer" target="_blank">
                  {data.name}
                </a>
              </p>
              <div className="flex">
                {data.technologies.map((img) => (
                  <img src={img} alt="project" className="h-[30px] mr-3 mb-2" />
                ))}
              </div>
              <p className="sm:text-xl">{data.description}</p>
            </div>
          </div>
        ))}
        <p className="text-center text-xl mt-[40px]">
          More Projects on my
          <a
            href="https://github.com/ArkanFaujdar"
            target="_blank"
            className="text-green-300"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
