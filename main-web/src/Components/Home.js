import React from "react";
import Typed from "react-typed";
import walle from "../img/wall-e.jpg";

const Home = () => {
  return (
    <div className="w-[100%] h-[100%] relative text-white">
      <img
        className="w-full h-auto object-cover -z-10"
        alt="HerpImg"
        src={walle}
      />
      <div className="absolute top-40 left-[50%] w-[100%] -translate-x-[50%] -translate-y-[10%] mx-auto flex flex-col ">
        <p className=" font-bold p-2 text-3xl">Learn with us</p>
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
