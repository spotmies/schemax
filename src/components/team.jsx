"use client";
import React from "react";
const teamMember1 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FDSC_1466-min.jpeg?alt=media&token=985478b3-d226-439b-b39d-6155e9fbb499";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FDSC_1466%20copy-min.jpeg?alt=media&token=d6594b57-5101-4f4c-b54a-93c7ccce5207";
// "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/ceo3.JPG?alt=media&token=3207307d-4ede-46ea-9ecf-dd3b5419b7de";
// "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/team1-min.jpg?alt=media&token=33b2799e-8fcd-412e-8202-7e0440c3167d";
// "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const teamMember2 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FTeam-3.jpg?alt=media&token=56eb6449-fa99-435f-a51b-d55ba1492894";
// "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const teamMember3 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FTeam-1-cropped.jpeg?alt=media&token=88f6275b-4e11-4129-bb75-e1765cb6b9c0";
// "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const teamMember4 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FTeam-2-cropped.jpeg?alt=media&token=d9a484fc-075b-4aa9-93c9-707ce6e3e174";
// "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/team5-min.jpg?alt=media&token=d86b34e5-fef2-45b2-8558-7806af95fd5d

const TeamSlide = () => {
  const teamMembers = [
    {
      name: "Naidu Sunkari",
      position: "CEO",
      image: teamMember1,
      path: "/naidusunkari",
    },
    { name: "Rama krishna", position: "Director", image: teamMember2 },
    {
      name: "Swathi",
      position: "Domestic Cost center head",
      image: teamMember3,
    },
    { name: "Sunitha", position: "HR head", image: teamMember4 },
  ];

  return (
    <div className="w-[100vw] bg-white" id="team">
      <div className="py-10  w-[90%] m-auto">
        <div className="w-full">
          <h2 className="text-3xl gil-bold tracking-tight text-primary sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-md text-primary opacity-60">
            This is our team of experts, consisting of skilled developers,
            designers, and technology specialists from around the world, who
            collaborate to deliver exceptional software solutions with
            innovation and expertise.
          </p>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FTeam-pic.JPG?alt=media&token=4de25b11-a4f9-4ca6-909e-5dae0e36673f"
            alt="industry"
            className=" mt-8 w-full h-[500px] object-cover rounded-md m-auto"
          />

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {teamMembers.map((member, key) => (
              <div
                onClick={() => {
                  if (member?.path) {
                    // redirect to member path using href
                    window.location.href = member?.path;
                  }
                }}
                key={key}
                className="relative group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div className="overflow-hidden rounded-sm shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover object-center hover:scale-105 group-hover:opacity-75 transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg gil-med text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-primary opacity-60">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
