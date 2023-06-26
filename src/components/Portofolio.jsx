import React from "react";
import trisaktilsc from "../assets/portofolio/trisaktiLsc.png";
import powertech from "../assets/portofolio/powertech.png";
import ninjaken from "../assets/portofolio/ninjaken.png";
import webangkatan2022 from "../assets/portofolio/webangkatan2022.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: trisaktilsc,
      demo: "https://trisakti-lsc.vercel.app/",
      code: "https://github.com/dimashn04/trisakti.lsc.git",
    },
    {
      id: 2,
      src: powertech,
      demo: "https://dimashn04.github.io/PoweTech.github.io/",
      code: "https://github.com/dimashn04/PoweTech.github.io.git",
    },
    {
      id: 3,
      src: ninjaken,
      demo: "https://dimashn04.github.io/Progate-project-JS/",
      code: "https://github.com/dimashn04/Progate-project-JS.git",
    },
    {
      id: 4,
      src: webangkatan2022,
      demo: "http://csui2022-six.vercel.app/",
      code: "https://github.com/CSUI22/webcsui22-frontend.git",
    },
  ];

  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
