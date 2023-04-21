import React from "react";
import namrata from "./images1/aa/PXL_20220312_103354403.PORTRAIT.jpg";
import jatin from "./images1/aa/JATIN SHARMA (1).jpg";
import yashaswini from "./images1/aa/YashaswiniK_1.jpg";
import sharanya from "./images1/aa/SharanyaBhat.jpg";
import suraj from "./images1/aa/Suraj Aribenchi.jpg";
import aadarsh from "./images1/aa/Aadarsh Shriniwas.jpg";
import ujjwal from "./images1/aa/UJJAWAL(jpeg).jpg";
import ketakl from "./images1/aa/_Ketaki.jpg";
import ashutosh from "./images1/aa/Ashutosh Malviya.jpg";
import ananya from "./images1/aa/Ananya.jpg";

const people = [
  {
    id: 1,
    name: "VISHAL MISHRA",
    image: "./img/Vishal.jpg",
    role: "Chairman",
  },
  {
    id: 2,
    name: "SUDHAMSHU BHATTA S",
    image: "./img/Sudhamshu.jpg",
    role: "Vice Chairman",
  },
  {
    name: "HARSHITHA M",
    image: "./img/Harshitha.jpg",
    role: "Treasurer",
  },
  {
    name: "HRISHIKESH PRADHAN",
    image: "./img/Hrishikesh.jpg",
    role: "Treasurer",
  },
  {
    name: "AMAN GUPTA",
    image: "./img/Aman.jpg",
    role: "Web Dev Lead",
  },
  {
    name: "ADITI DUBEY",
    image: "./img/Aditi.jpg",
    role: "Digital Lead",
  },
  {
    name: "KSHITIZ SINGH",
    image: "./img/Kshitiz Singh.jpg",
    role: "Internal Dev Lead",
  },

  {
    name: "ADITYA RAJ",
    image: "./img/ADITYA RAJ.jpg",
    role: "Senior Member",
  },
  {
    name: "UTKARSH SAHAY",
    image: "./img/Utkarsh Sahay.jpg",
    role: "Senior Member",
  },
  {
    name: "RAZEE SHRIVASTAV",
    image: "./img/Razee.jpg",
    role: "Senior Member",
  },
  {
    name: "HARSHKANT",
    image: "./img/HARSHKANT.jpeg",
    role: "Senior Member",
  },
  {
    name: "SHRUTI BHARADWAJ",
    image: "./img/Shruti.jpg",
    role: "Senior Member",
  },
  {
    name: "SUMANTH JAIN",
    image: "./img/Sumanth Jain.jpg",
    role: "Senior Member",
  },
  {
    name: "ASHISH MAHANTH",
    image: "./img/Ashish.jpg",
    role: "Third Year",
  },
  {
    name: "BINDUSHREE",
    image: "./img/Bindushree B, CSE.jpg",
    role: "Third Year",
  },
  {
    name: "SAMEER KUMAR",
    image: "./img/Sameer.jpg",
    role: "Third Year",
  },
  {
    name: "ADITYA DUBEY",
    image: "./img/1SI20ET002.jpg",
    role: "Third Year",
  },
  {
    name: "KUNAL",
    image: "./img/Kunal.jpg",
    role: "Third Year",
  },
  {
    name: "TANNISHTHA NANDY",
    image: "./img/Tannistha Nandy .jpg",
    role: "Third Year",
  },
  {
    name: "OJAS SANGRA",
    image: "./img/IMG_20230210_200320.jpg",
    role: "Third Year",
  },
  {
    name: "YASHASWINI",
    image: yashaswini,
    role: "Third Year",
  },
  {
    name: "AYUSHMAN SHARMA",
    image: "./img/Ayushman Sharma.jpeg",
    role: "Third Year",
  },
  {
    name: "JEEVITHA",
    image: "./img/1si20ec039_jeevitha.jpg",
    role: "Third Year",
  },
  {
    name: "SHREE HARSHIKA",
    image: "./img/HarshikaID (1).jpeg",
    role: "Third Year",
  },
  {
    name: "SHARANYA BHAT",
    image: sharanya,
    role: "Second Year",
  },
  {
    name: "ASHUTOSH MALVIYA",
    image: ashutosh,
    role: "Second Year",
  },
  {
    name: "KUMAR HARSH",
    image: "./img/Kumar Harsh.jpg",
    role: "Second Year",
  },
  {
    name: "RISHAV SHEKHAR",
    image: "./img/IMG-20221119-WA0000.jpg",
    role: "Second Year",
  },
  {
    name: "HARSH GAURAV",
    image: "./img/Harsh Gaurav.jpg",
    role: "Second Year",
  },
  {
    name: "LEKHANA PATEL",
    image: "./img/IMG_20230216_144211.jpg",
    role: "Second Year",
  },
  {
    name: "NAMRATA BHARADWAJ",
    image: namrata,
    role: "Second Year",
  },
  {
    name: "SIDDHANT RAJ",
    image: "./img/Siddhant Raj.jpeg",
    role: "Second Year",
  },
  {
    name: "JATIN SHARMA",
    image: jatin,
    role: "Second Year",
  },
  {
    name: "SURAJ ARIBENCHI",
    image: suraj,
    role: "Second Year",
  },
  {
    name: "VIVEK M",
    image: "./img/Vivek M (EEE).jpg",
    role: "Second Year",
  },
  {
    name: "AADARSH SHRINIWAS",
    image: aadarsh,
    role: "Second Year",
  },
  {
    name: "Vaishali Choudhary ",
    image: "./img/B Vaishali Choudhary .jpg",
    role: "Second Year",
  },
  {
    name: "Aditi Joshi",
    image: "./img/Aditi Joshi ECE.jpg",
    role: "Second Year",
  },
  {
    name: "Mayank Pandey ",
    image: "./img/Mayank Pandey .jpg",
    role: "Second Year",
  },
  {
    name: "UJJAWAL SINGH ",
    image: ujjwal,
    role: "Second Year",
  },
  {
    name: "BADAL",
    image: "./img/BADAL.jpg",
    role: "Second Year",
  },
  {
    name: "Aryan",
    image: "./img/Aryan.jpg",
    role: "Second Year",
  },
  {
    name: "_Chaithra HR",
    image: "./img/_Chaithra HR , AIML.jpg",
    role: "First Year",
  },
  {
    name: "_Ketaki Jojane",
    image: ketakl,
    role: "First Year",
  },
  {
    name: "Om",
    image: "./img/_Om .jpg",
    role: "First Year",
  },
  {
    name: "Aishwarya Acharya",
    image: "./img/Aishwarya Acharya PK ,ISE.jpg",
    role: "First Year",
  },
  {
    name: "Mudit shekhar",
    image: "./img/Mudit shekhar , EEE.jpg",
    role: "First Year",
  },
  {
    name: "Neethu",
    image: "./img/Neethu.jpg",
    role: "First Year",
  },
  {
    name: "NM Sai Likhitha",
    image: "./img/NM Sai Likhitha.jpg",
    role: "First Year",
  },
  {
    name: "Varsha",
    image: "./img/varsha.png",
    role: "First Year",
  },
  {
    name: "Yatin Bhatia",
    image: "./img/YATIN BHATIA.jpg",
    role: "First Year",
  },
  {
    name: "Guru Srisha",
    image: "./img/Guru Srisha.jpg",
    role: "First Year",
  },
  {
    name: "Ananya C R",
    image: ananya,
    role: "First Year",
  },
];

const Team = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Team
      </h2>
      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8">
        {people.map((person, i) => (
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              key={i}
              className="aspect-square obje w-70 h-56 rounded-xl mx-auto mt-[-3rem] bg-white"
              src={person.image}
              alt="/"
            />
            <h2 className="text-xl font-semibold text-center py-8">
              {person.name}
            </h2>
            <div className="text-center font-medium">
              <p className="  py-2 border-b mx-8 mt-8">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
