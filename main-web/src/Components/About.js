import React from "react";

import Single from "../img/team1b.jpg";
import Double from "../img/team1a.jpg";
import Triple from "../img/team1c.jpg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="relative text-center text-3xl font-semibold my-7">
        ABOUT US
      </h1>
      <div className=" max-w-full  mx-auto grid gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-xl text-[#00df9a] whitespace-normal text-justify font-bold  ">
            The only Robotics Club of SIT under the patronage of E-yantra cell
            of IIT Bombay.
          </p>
        </div>

        <div className="sm:flex flex-col justify-center ">
          <div className="flex flex-col justify-center">
            {/* <p className="text-2xl text-[#00df9a] font-bold">Location: </p> */}
            <div className="flex  ">
              {/* <SlLocationPin className="mt-6 mr-1" size={30} /> */}
              <p className="py-2 text-base text-justify font-bold">
                CORSIT is the robotics club of SIT, working in the field of
                robotics to bring together like-minded individuals to share
                experience and have fun building robots. The club was
                established in year 2006 and since then it has organized various
                national level workshops as well as participated in various
                national level events. Our aim is to empower students with the
                possibility of getting their hands dirty and learning about
                robotics by practically doing it. It officially controls all the
                robotics activities carried out by SIT.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="relative text-center text-3xl font-semibold my-7">
        FOUNDERS
      </h1>

      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-full"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Kiran B K</h2>
          <div className="text-center font-medium">
            <p className="  text-center py-2 border-b mx-8 mt-8">
              Product Owner at Bosch Global Software and Technologies{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-transparent rounded-full"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Shivaswaroop P
          </h2>
          <div className="text-center font-medium">
            <p className=" text-center  text-justifypy-2 border-b mx-8 mt-8">
              Procurement Specialist at ZF Group{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" mx-auto mt-[-3rem] bg-white rounded-full h-24 w-24"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Divyanshu Sahay
          </h2>
          <div className="text-center font-medium">
            <p className="   text-center py-2 border-b mx-8 mt-8">
              Firmware Engineer at Intel Corporation{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
