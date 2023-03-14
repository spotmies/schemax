import React from "react";
const teamMember1 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const teamMember2 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const teamMember3 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";
const teamMember4 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80";

const TeamSlide = () => {
  const teamMembers = [
    { name: "John Doe", position: "CEO", image: teamMember1 },
    { name: "Jane Doe", position: "COO", image: teamMember2 },
    { name: "Bob Smith", position: "CTO", image: teamMember3 },
    { name: "Samantha Johnson", position: "CMO", image: teamMember4 },
  ];

  return (
    <div className="w-[100vw] bg-white">
      <div className="py-10  w-[90%] m-auto">
        <div className="w-full">
          <h2 className="text-3xl gil-bold tracking-tight text-primary sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-md text-primary opacity-60">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>

          <img
            src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80"
            alt="industry"
            className=" mt-8 w-full h-[400px] object-cover rounded-md m-auto"
          />

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
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
