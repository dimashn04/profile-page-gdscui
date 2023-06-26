import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum! */}
          Hi. I'm Dimas Herjunodarpito Notoprayitno, nice to meet you. Please take a look around.
        </p>

        <br />

        <p className="text-xl">
            I am passionate about cyber and network security, robotics, and building excellent software to improve
            the lives of those around me. I'm currently open for creating software and providing cyber and network security
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. I'm also actively participating in cyber security
            related events such as CTF competitions and also robotics related events.
        </p>
      </div>
    </div>
  );
};

export default About;