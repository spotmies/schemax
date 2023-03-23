"use client";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
const backgroundImage =
  "https://nftstorage.link/ipfs/bafybeiero6axxjkhsky73do5edhly43qa5wlqwmghetxl4poiczl57oqo4";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2FDSC_1466%20copy-min.jpeg?alt=media&token=d6594b57-5101-4f4c-b54a-93c7ccce5207";

const backgroundImage2 =
  "https://nftstorage.link/ipfs/bafybeiexl6rv2onlckdjqjezs2rvvmgbzht45mldvzmclpw4cdxsyxsbcu";

const cardsData = [
  {
    id: 1,
    title: "About Me",
    moreDescription:
      "Mr.Naidu Sunkari, Schemax Founder and Chief Executive Officer. As CEO, Mr.Naidu Sunkari is charged for Schemax's strategic direction, global brand awareness, and year-over-year revenue growth. His strategy vision is guided by four pillars: market insight, innovation, talent, and corporate culture. Post Graduate in Engineering With over 25 years of global IT experience in roles ranging from Application/ System Programmer to project manager, delivery manager ,Pre-Sales , Competency Head, Cost centre Head, Location Head ,having worked with a diverse range of blue-chip clients such as Nissan (USA), Master Card Inc (USA), ADP (USA) , Household INC (owned by HSBC Inc, USA), and General Motors (USA) Deutsche Bank (Singapore), Axa Bank (Beligium) and fezier (Japan). Worked as Application/ System Programmer from Beginning of the carrier. Production support , Project manger ,  Delivery manger , And Finlay Became entrepreneur Married Sujatha and son Sriteja (MS- Finance - Wash) , Daughter Pooja (MBA - Grate lake) and living in Beautiful city Visakhapatnam, AP, India ",
    description:
      "Mr.Naidu Sunkari, Schemax Founder and Chief Executive Officer. Guiding its strategic direction, growth, and culture with 25+ years of IT experience and diverse clients.",
  },
  {
    id: 2,
    title: "Inspiration",
    moreDescription:
      "He come from a farming background, acquiring an IT profession is a goal for everyone around me, but they believe they are unsuited to accomplish it due to their lifestyle or financial challenges. This is a problem that exists in all rural areas, he want to make a difference and show that everyone, regardless of race, religion, or economic status, can accomplish these IT professions by offering the necessary skills to make their aspirations come true. Even when he moved to the United States, he had a conscious desire to give something back to society. During conducting interviews, he discovered that the rate of placements on college campuses for poor and rural students is less than 5%. his strong belief is that it is neither a lack of talent or a skill deficit. There is a lack of direction and guidance. So he established Schemax with 25 students (Poor and rural). HIs belief made Him in this position.",
    description:
      "Coming from a farming background, he wants to help poor and rural students achieve IT professions through Schemax, which offers necessary skills and guidance to overcome financial and lifestyle challenges.",
  },
  {
    id: 3,
    title: "Awards & Aspirations",
    description:
      "Naidu Sunkari received several awards, including NNA Award from Nissan, Business Person of the Year 2021 from A.P Governor, Guinness world record for blood donation, and Business excellence 2022 for technology innovation.",
  },
  {
    id: 4,
    title: "Schemax Mantra",
    description:
      "Schemax focuses on low-cost delivery and client satisfaction by creating innovative and powerful applications. Our CEO believes in a happy workforce for a satisfied client, and leadership takes responsibility for client issues.",
  },
];

const Slide = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [isPopupOpen4, setIsPopupOpen4] = useState(false);
  function PopupScreen() {
    return (
      <div>
        {isPopupOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div
              // key={key}
              className=" bg-white z-50 shadow-sm p-6 hover:shadow-lg transition duration-300 w-[90vw] md:w-[70vw] h-[80vh] md:h-fit min-h-[300px] flex flex-col justify-between relative overflow-y-auto"
            >
              <h2 className="text-3xl gil-bold text-primary">About Me</h2>
              <p className="text-gray-600 pt-4 text-xl">
                Mr.Naidu Sunkari, Schemax Founder and Chief Executive Officer.
                As CEO, Mr.Naidu Sunkari is charged for Schemax's strategic
                direction, global brand awareness, and year-over-year revenue
                growth. His strategy vision is guided by four pillars: market
                insight, innovation, talent, and corporate culture.
                <br />
                <br />
                With a Post Graduate in Engineering and over 25 years of global
                IT experience, With over 25 years of global IT experience in
                roles ranging from Application/ System Programmer to project
                manager, delivery manager ,Pre-Sales , Competency Head, Cost
                centre Head, Location Head ,having worked with a diverse range
                of blue-chip clients such as Nissan (USA), Master Card Inc
                (USA), ADP (USA) , Household INC (owned by HSBC Inc, USA), and
                General Motors (USA) Deutsche Bank (Singapore), Axa Bank
                (Beligium) and fezier (Japan).
                <br />
                <br />
                At the beginning of his professional life, he worked as an
                application/system programmer. Has had various positions such as
                production support, project manager, delivery manager, and
                become entrepreneur.
                <br />
                <br />
                Married Sujatha and son Sriteja (MS- Finance - Wash) , Daughter
                Pooja (MBA - Grate lake) and living in Beautiful city
                Visakhapatnam, AP, India
              </p>
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => {
                  setIsPopupOpen(false);
                }}
              >
                <AiOutlineCloseCircle size="2rem" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  function PopupScreen2() {
    return (
      <div>
        {isPopupOpen2 && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div
              // key={key}
              className=" bg-white z-50 shadow-sm p-6 hover:shadow-lg transition duration-300 w-[90vw] md:w-[70vw] h-[80vh] md:h-fit min-h-[300px] flex flex-col justify-between relative overflow-y-auto"
            >
              <h2 className="text-3xl gil-bold text-primary">Inspiration</h2>
              <p className="text-gray-600 pt-4 text-xl">
                He comes from a farming background, and acquiring an IT
                profession is a goal for everyone around him. However, they
                believe they are unsuited to accomplish it due to their
                lifestyle or financial challenges. This problem exists in all
                rural areas. He wants to make a difference and show that
                everyone, regardless of race, religion, or economic status, can
                accomplish IT professions by offering the necessary skills to
                make their aspirations come true.
                <br />
                <br />
                Even when he moved to the United States, he had a conscious
                desire to give something back to society. During interviews, he
                discovered that the rate of placements on college campuses for
                poor and rural students is less than 5%. His strong belief is
                that it is neither a lack of talent nor a skill deficit, but a
                lack of direction and guidance. So he established Schemax with
                25 students (poor and rural).
                <br />
                <br />
                <span className="gil-bold">
                  "His belief made Him in this position"
                </span>
              </p>
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => {
                  setIsPopupOpen2(false);
                }}
              >
                <AiOutlineCloseCircle size="2rem" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  function PopupScreen3() {
    return (
      <div>
        {isPopupOpen3 && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div
              // key={key}
              className=" bg-white z-50 shadow-sm p-6 hover:shadow-lg transition duration-300 w-[90vw] md:w-[70vw] h-[80vh] md:h-fit min-h-[300px] flex flex-col justify-between relative overflow-y-auto"
            >
              <h2 className="text-3xl gil-bold text-primary">
                Awards & Aspirations
              </h2>
              <p className="text-gray-600 pt-4 text-xl">
                1. Best Project Team and Excellence - NNA Award from Nissan
                North America in 2014
                <br />
                <br />
                2.BUSINESS PERSON OF THE YEAR 2021 - Award from A.P Governor for
                creation of Poor Rural youth job creations.
                <br />
                <br />
                3. Guinness world record (www.ysrcpblooddonation.com) - Blood
                donation Project almost 1.5 lacs of blood donation pledge
                initiation in 24 hours
                <br />
                <br />
                4. Business excellence 2022 - Award from A.P Governor for BEST
                INNOVATIVE AND CREATIVE USE OF TECHNOLOGY.
                <br />
                <br />
              </p>
              <p className="text-xl gil-med">
                "Every associate should become employee to employer"
              </p>

              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => {
                  setIsPopupOpen3(false);
                }}
              >
                <AiOutlineCloseCircle size="2rem" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  function PopupScreen4() {
    return (
      <div>
        {isPopupOpen4 && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div
              // key={key}
              className=" bg-white z-50 shadow-sm p-6 hover:shadow-lg transition duration-300 w-[90vw] md:w-[70vw] h-[70vh] md:h-fit min-h-[250px] flex flex-col justify-between relative overflow-y-auto"
            >
              <h2 className="text-3xl gil-bold text-primary">Schemax Mantra</h2>
              <p className="text-gray-600 pt-4 text-xl">
                1. Low cost delivery with high quality delivery and client
                satisfaction accomplishment by creating the most creative and
                powerful application by consistently researching and
                comprehending the ever-changing industry needs.
                <br />
                <br />
                2. According to him, A happy workforce equals a satisfied client
                <br />
                <br />
                3. At the first level, leadership is expected to take
                responsibility for client issues.
                <br />
                <br />
              </p>

              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => {
                  setIsPopupOpen4(false);
                }}
              >
                <AiOutlineCloseCircle size="2rem" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  const Card = ({ title, description, onClick }) => {
    return (
      <div
        // key={key}
        className=" bg-white z-40 shadow-sm p-6 hover:shadow-lg transition duration-300 w-[85vw] md:w-[360px] h-[300px] flex flex-col justify-between"
      >
        <h2 className="text-3xl gil-bold text-primary">{title}</h2>
        <p className="text-gray-600">{description}</p>

        <p
          className="text-primary underline opacity-50 hover:opacity-100 w-fit cursor-pointer"
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          View more
        </p>
      </div>
    );
  };

  return (
    <>
      <PopupScreen />
      <PopupScreen2 />
      <PopupScreen3 />
      <PopupScreen4 />
      <div className="relative min-h-screen h-fit md:h-screen w-full bg-cover bg-center flex flex-col justify-center items-start  md:bg-[url('https://nftstorage.link/ipfs/bafybeiero6axxjkhsky73do5edhly43qa5wlqwmghetxl4poiczl57oqo4')] bg-[url('https://nftstorage.link/ipfs/bafybeiexl6rv2onlckdjqjezs2rvvmgbzht45mldvzmclpw4cdxsyxsbcu')] bg-no-repeat ">
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-60 z-10" />

        <div className="w-[55%] p-8 z-20 hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            {cardsData.map((card, key) => (
              <Card
                onClick={() => {
                  if (key === 0) {
                    setIsPopupOpen(true);
                  }
                  if (key === 1) {
                    setIsPopupOpen2(true);
                  }
                  if (key === 2) {
                    setIsPopupOpen3(true);
                  }
                  if (key === 3) {
                    setIsPopupOpen4(true);
                  }
                }}
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
            {cardsData.map((card, key) => (
              <Card
                onClick={() => {
                  if (key === 0) {
                    setIsPopupOpen(true);
                  }
                  if (key === 1) {
                    setIsPopupOpen2(true);
                  }
                  if (key === 2) {
                    setIsPopupOpen3(true);
                  }
                  if (key === 3) {
                    setIsPopupOpen4(true);
                  }
                }}
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
