import React from "react";
const backgroundImage =
  "https://nftstorage.link/ipfs/bafybeiero6axxjkhsky73do5edhly43qa5wlqwmghetxl4poiczl57oqo4";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FDSC_1466%20copy-min.jpeg?alt=media&token=d6594b57-5101-4f4c-b54a-93c7ccce5207";

const backgroundImage2 =
  "https://nftstorage.link/ipfs/bafybeiexl6rv2onlckdjqjezs2rvvmgbzht45mldvzmclpw4cdxsyxsbcu";

const cardsData = [
  {
    id: 1,
    title: "About Me",
    description:
      "I am an experienced CEO with a passion for innovation and leadership. My expertise lies in driving growth and developing strong teams.",
  },
  {
    id: 2,
    title: "What I Do",
    description:
      "As a CEO, I oversee the strategic direction and daily operations of the company. I work closely with our teams to ensure we're delivering high-quality products and services.",
  },
  {
    id: 3,
    title: "How It Work",
    description:
      "We believe in a collaborative approach to business. Our teams work together to identify opportunities, develop solutions, and implement strategies for success.",
  },
  {
    id: 4,
    title: "Contact Me",
    description:
      "If you have any questions or inquiries, please feel free to reach out to me directly. I'm always happy to connect and discuss potential partnerships or opportunities.",
  },
];

const Slide = () => {
  const Card = ({ title, description }) => {
    return (
      <div
        // key={key}
        className=" bg-white z-50 shadow-sm p-6 hover:shadow-lg transition duration-300 w-[85vw] md:w-[340px] h-[300px] flex flex-col justify-between"
      >
        <h2 className="text-3xl gil-bold text-primary">{title}</h2>
        <p className="text-gray-600">{description}</p>

        <p className="text-primary underline opacity-50 hover:opacity-100 w-fit cursor-pointer">
          View more
        </p>
      </div>
    );
  };

  return (
    <>
      <div
        className="relative min-h-screen h-fit md:h-screen w-full bg-cover bg-center flex flex-col justify-center items-start  md:bg-[url('https://nftstorage.link/ipfs/bafybeiero6axxjkhsky73do5edhly43qa5wlqwmghetxl4poiczl57oqo4')] bg-[url('https://nftstorage.link/ipfs/bafybeiexl6rv2onlckdjqjezs2rvvmgbzht45mldvzmclpw4cdxsyxsbcu')] bg-no-repeat "
        // style={
        //   size.width > 768 ?
        //   {
        //         backgroundImage: `url(${backgroundImage2})`,
        //         backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover",
        //       }
        //       :
        //       {
        //         backgroundImage: `url(${backgroundImage})`,
        //         backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover",

        //       }

        // }
      >
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-60 z-10" />
        <div className="w-[55%] p-8 z-20 hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            {cardsData.map((card,key) => (
              <Card
                key={key}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100vh] block md:hidden mt-[-80%]">
        <div className="w-[100vw] p-8 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardsData.map((card,key) => (
              <Card
                key={key}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
