import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className="bg-black w-full h-[88vh]">
      <div className="max-w-[930px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 text-[18px]">Hello, I am</p>
        {/* <h1 className="text-4xl sm:text-6xl font-bold text-green-300">
          Arkan Faujdar
        </h1> */}
        <span>
          <ReactTyped
            strings={["Arkan Faujdar"]}
            typeSpeed={20}
            showCursor={false} // Hides the cursor
            className="text-4xl sm:text-6xl font-bold text-green-300"
          />

          <ReactTyped
            strings={["."]}
            typeSpeed={150}
            loop
            showCursor={false} // Hides the cursor
            className="text-4xl sm:text-6xl font-bold text-green-300"
          />
        </span>

        <ReactTyped
          strings={["Software Developer."]}
          typeSpeed={20}
          showCursor={false} // Hides the cursor
          className="text-3xl sm:text-4xl text-gray-500"
        />

        <p className="text-gray-300 py-4 max-w-[800px]">
          I'm a skilled developer specializing in React Js and ASP.Net
          framework. With a focus on creating visually appealing and
          user-friendly interfaces. I bring a blend of creativity and technical
          expertise to every project. Explore my portfolio to see how I turn
          ideas into seamless and engaging web experiences.
        </p>
        <div className="grid md:grid-cols-2 items-center">
          <NavLink to="/portfolio">
            <button className="text-white border-2 px-6 py-3 my-2 hover:cure hover:border-green-300 hover:cursor-e-resize">
              View Portfolio
            </button>
          </NavLink>
          <div className="mt-4 md:my-auto">
            <SocialIcon
              url="https://linkedin.com/in/arkan-faujdar"
              target="_blank"
              className="mr-3"
            />
            <SocialIcon
              url="https://github.com/ArkanFaujdar"
              target="_blank"
              className="mr-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
