import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaAws,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiApache,
  SiGodaddy,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiSolidity,
} from "react-icons/si";

const TechnologySlide = () => {
  const technologyData = [
    {
      name: "React",
      icon: <FaReact className="h-[4rem] w-[4rem] text-blue-500" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-[4rem] w-[4rem] text-green-500" />,
    },
    {
      name: "Blockchain",
      icon: <SiSolidity className="h-[4rem] w-[4rem] text-slate-400" />,
    },
    {
      name: "Angular",
      icon: <FaAngular className="h-[4rem] w-[4rem] text-red-500" />,
    },

    {
      name: "PHP",
      icon: <FaPhp className="h-[4rem] w-[4rem] text-purple-500" />,
    },
    {
      name: "Java",
      icon: <FaJava className="h-[4rem] w-[4rem] text-red-500" />,
    },

    {
      name: "HTML5",
      icon: <FaHtml5 className="h-[4rem] w-[4rem] text-red-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 className="h-[4rem] w-[4rem] text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="h-[4rem] w-[4rem] text-yellow-500" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="h-[4rem] w-[4rem] text-yellow-500" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="h-[4rem] w-[4rem] text-blue-500" />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb className="h-[4rem] w-[4rem] text-green-500" />,
    },
    {
      name: "SQL",
      icon: <SiMysql className="h-[4rem] w-[4rem] text-blue-500" />,
    },
    {
      name: "Nest",
      icon: <SiNestjs className="h-[4rem] w-[4rem] text-red-500" />,
    },
    {
      name: "GoDaddy",
      icon: <SiGodaddy className="h-[4rem] w-[4rem] text-blue-500" />,
    },
    {
      name: "Apache",
      icon: <SiApache className="h-[4rem] w-[4rem] text-red-500" />,
    },
  ];

  return (
    <div className="w-[100vw] bg-bg2">
      <div className=" py-16 w-[90%] m-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl gil-bold mb-8 ">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 md:gap-8">
            {technologyData.map((technology, index) => (
              <div
                key={index}
                className="bg-white rounded-sm shadow-sm p-4 md:p-8 flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
              >
                {technology.icon}
                <h3 className="text-xl gil-bold mt-4">{technology.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySlide;
