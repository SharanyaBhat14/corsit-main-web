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
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={lfr}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">LFR</h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              A Line Follower Robot is a fundamental type of robot that is
              programmed to follow a designated path marked by a line with a
              specific width, utilizing sensors and algorithms for accurate
              tracking and navigation.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-64 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={home}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Home-Automation
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify  text-justifypy-2 border-b mx-8 mt-8">
              A home automation system is designed to monitor and control
              various attributes of a home, including lighting, climate,
              entertainment systems, and appliances, through the use of
              technology and automation for enhanced convenience and efficiency.{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={obstacle}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Obstacle Avoiding Bot
          </h2>
          <div className="text-center font-medium">
            <p className="   text-justify py-2 border-b mx-8 mt-8">
              An Obstacle Avoiding Robot is a type of autonomous mobile robot
              that is equipped with sensors and algorithms enabling it to
              navigate its environment while actively avoiding collisions with
              unexpected obstacles.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* //end of 1 */}
      <div className="max-w-[1240px] my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={soccer}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Robo Soccer Bot
          </h2>
          <div className="text-center font-medium">
            <p className="  text-justify py-2 border-b mx-8 mt-8">
              A Robot Soccer BOT is a specialized robot designed to compete in
              an arena specifically tailored for robotic soccer matches,
              showcasing their abilities in the field of robotic sports.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={Augmented}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Augmented Reality
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              Augmented reality refers to an enhanced depiction of the physical
              world that combines digital visual elements, sounds, or other
              sensory stimuli, delivered through technology to provide an
              enriched and interactive experience.{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={gesture}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Gesture Controlled Bot
          </h2>
          <div className="text-center font-medium">
            <p className="   text-justify py-2 border-b mx-8 mt-8">
              A gesture-controlled robot is a type of robot that can be
              controlled by hand gestures, allowing for intuitive and hands-free
              operation without the need for physical buttons or external
              devices.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* //end of 2 */}
      <div className="max-w-[1240px] my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={bluetooth}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Bluetooth Bot</h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              A Bluetooth-controlled robot is a type of robot that is operated
              by an Android mobile phone, utilizing wireless Bluetooth
              communication for remote control and command input.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-60 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={selfBalance}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Self-Balancing Bot
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              A self-balancing robot is a type of two-wheeled robot that is
              designed to maintain its balance and prevent from falling by
              employing mechanisms or algorithms that enable it to adjust and
              stabilize its position in real-time.{" "}
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={robowar}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Robo War</h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              A Robowar robot is a formidable, bipedal war machine equipped with
              weapons, designed to exhibit dominance on the battlefield.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* //end of 3 */}
      <div className="max-w-[1240px] my-16 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-70 rounded-xl mx-auto mt-[-3rem] bg-white"
            src={wall}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Wall Following Bot
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              The purpose of a wall-following robot is to navigate alongside a
              wall without making contact with it, using a design specifically
              tailored for this task.{" "}
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="  w-60 rounded-xl mx-auto mt-[-3rem] bg-transparent"
            src={rfid}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            RFID Attendance System
          </h2>
          <div className="text-center font-medium">
            <p className=" text-justify py-2 border-b mx-8 mt-8">
              The RFID attendance system utilizes wireless identification to
              track and record the presence of stakeholders as they come within
              the radiofrequency range of the RFID attendance reader.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* end of 4 */}
    </div>
  );
};

export default Project;
