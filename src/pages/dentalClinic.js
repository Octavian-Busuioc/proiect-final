import React from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import DentalClinicImg from "../../public/assets/dental-clinic.png";

import { RiRadioButtonFill } from "react-icons/ri";

//import data
import { stomatologyClinic } from "../data/projectPages.js";
import Link from "next/link";

const dentalClinic = () => {
  return (
    <div className="w-full">
      {stomatologyClinic.map((item, index) => {
        const { title, titletwo, description } = item;
        return (
          <div key={index}>
            <div className="w-screen h-[50vh] lg:h-[60h] relative">
              <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60h] bg-black/70 z-10">
                <Logo />
              </div>
              <Image
                className="absolute z-1 object-cover"
                fill
                src={DentalClinicImg}
                alt="/"
              />
              <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white z-10 p-2 translate-x-[-50%] translate-y-[-50%]">
                <h2 className="py-2">{title}</h2>
                <h3>{titletwo}</h3>
              </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
              <div className="col-span-4">
                <p>Project </p>
                <h2 className="font-bold">Overview</h2>
                <p>{description}</p>
                <form
                  className="inline"
                  action="https://github.com/Octavian-Busuioc/Proiect-HTML-CSS"
                  method="get"
                  target="_blank"
                >
                  <button className="mr-8 btn-projects">Code</button>
                </form>
                <form
                  className="inline"
                  action="https://project-dental-clinic-by-octavian.netlify.app/"
                  method="get"
                  target="_blank"
                >
                  <button className="btn-projects">Live Demo</button>
                </form>
              </div>
              <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                <div className="p-2">
                  <p className="text-center font-bold pb-2">Technologies</p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="text-gray-600 py-2 flex items-center">
                      <RiRadioButtonFill className="pr-1" /> Css 3
                    </p>
                    <p className="text-gray-600 py-2 flex items-center">
                      <RiRadioButtonFill className="pr-1" /> HTML 5
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/">
                <p className="cursor-pointer">
                  <span>🔙</span>Go Back
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default dentalClinic;
