import React from "react";
import Typed from "react-typed";
import walle from "../img/wall-e.jpg";

const Home = () => {
  return (
    <div className="w-screen h-[100%] relative text-white">
      <img
        className="w-full h-screen object-fill -z-10"
        alt="HerpImg"
        src={walle}
      />
      <div className="absolute top-40 left-[50%] max-w-screen-sm -translate-x-10 -translate-y-[10%] mx-auto flex flex-col ">
        <p className=" font-bold ml-9 p-2 text-3xl">Learn with us</p>
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6 md:ml-11">
          Grow with us.
        </h1>
        <div className=" px-7 mx-20 mt-24 items-center">
          <p className="md:text-6xl sm:text-4xl text-xl font-bold py-4">
            Learn
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold whitespace-nowrap md:pl-4 pl-2"
            strings={[
              "Robotics",
              "Web Dev",
              "ML",
              "App Dev",
              "Arduino",
              "AR",
              "Photoshop",
              //"Video Editing",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
      {/* <div className="bg-blue-600  w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[black] font-bold p-2 text-3xl">Learn with us</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with us.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Learn
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Robotics",
              "Web Development",
              "Machine Learning",
              "App Development",
              "Arduino Programming",
              "Augmented Reality",
              "Photoshop",
              "Video Editing",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        
      </div>
     */}
    </div>
  );
};

export default Home;
