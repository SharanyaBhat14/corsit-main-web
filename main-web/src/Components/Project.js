import React from "react";
import Augmented from "../img/augmented.jpg";
import bluetooth from "../img/blue.jpg";
import gesture from "../img/gesture.png";
import lfr from "../img/LFR.jpg";
import obstacle from "../img/obstacle.png";
import rfid from "../img/RFID.png";
import robowar from "../img/robowar.jpeg";
import selfBalance from "../img/self.webp";
import soccer from "../img/soccer.jpeg";
import home from "../img/Home-automation.jpg";
import wall from "../img/obs.jpg";

const Project = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Bots & Projects
      </h2>
      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={lfr}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">LFR</h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              The Line Follower Robot is a basic robot that follows a specific
              path indicated by a line having some particular width.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-64 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={home}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Home-automation
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify  text-justifypy-2 border-b mx-8 mt-8">
              A home automation system will monitor and control home attributes
              such as lighting, climate, entertainment systems, and appliances.{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={obstacle}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Obstacle Avoiding Bot
          </h2>
          <div className="text-center font-medium">
            <p className="   text-justify py-2 border-b mx-8 mt-8">
              An Obstacle Avoiding Robot is a type of autonomous mobile robot
              that avoids collision with unexpected obstacles.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* //end of 1 */}
      <div className="max-w-[1240px] my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={soccer}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Robo Soccer Bot
          </h2>
          <div className="text-center font-medium">
            <p className="  text-justify py-2 border-b mx-8 mt-8">
              Robot Soccer BOT is a bot that compete on an arena specially
              designed for robotic soccer match.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={Augmented}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Augmented reality
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              Augmented reality is an enhanced version of the real physical
              world that is achieved through the use of digital visual elements,
              sound, or other sensory stimuli delivered via technology.{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={gesture}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Gesture Controlled Bot
          </h2>
          <div className="text-center font-medium">
            <p className="   text-justify py-2 border-b mx-8 mt-8">
              A Gesture Controlled robot is a robot which can be controlled by
              your hand gestures.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* //end of 2 */}
      <div className="max-w-[1240px] my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={bluetooth}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Bluetooth Bot</h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              Bluetooth controlled Robot is controlled by using Android mobile
              phone.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-60 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={selfBalance}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Self-Balancing Bot
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              Self-balancing robot is a two-wheeled robot which balances itself
              and prevents from falling.{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={robowar}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Robo War</h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              A Robowar robot is a large, armed, walking war machine to show
              dominance over a battlefield.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* //end of 3 */}
      <div className="max-w-[1240px] my-16 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={wall}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Wall Following Bot
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              A wall following robot is designed to move along a wall without
              hitting it.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-60 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={rfid}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            RFID attendance System
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              RFID attendance system provides wireless identification of
              stakeholders when they fall in the radiofrequency range of the
              RFID attendance reader.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* end of 4 */}
    </div>
  );
};

export default Project;
