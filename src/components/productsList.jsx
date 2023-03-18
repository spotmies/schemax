"use client";
import React from "react";
import { motion } from "framer-motion";
const Image1 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fapparels.jpg?alt=media&token=c60d4c89-f5df-4f0b-8f64-5de3ca51b3e3";
// ("https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/apparels.jpg?alt=media&token=816ac441-a8fa-4083-a0a3-86957a2ab4aa");
// https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fapparels.jpg?alt=media&token=78ff2c70-2e45-46f5-af05-5076d90fae35
// "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image2 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fautomobiles-min.jpg?alt=media&token=4d6e70fd-28c0-4da3-bbea-16251b9cb3b0";
// "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image3 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fecommerce3-min.jpg?alt=media&token=31cdbe57-fae5-4721-bbac-854c89b16bf4";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/ecommerce2-min.jpg?alt=media&token=f5680f6f-21ff-4d5f-b537-042ac400df9b
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/ecommerce-min.jpg?alt=media&token=70c81d75-b1c7-4c82-9d73-8b357d10d1cc
// "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image4 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fbiowaste-min.jpg?alt=media&token=8d985aec-2908-4b10-8d70-68c5119c13eb";
// "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/biowaste-min.jpg?alt=media&token=6057d3e5-e3b2-4582-baca-1cb839747fbb";
// "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const Image5 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fwarehouse-min.jpg?alt=media&token=ceee7136-82eb-460e-94ae-ce2811a254ee";
// "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/warehouse2-min.jpg?alt=media&token=5dbc21c9-65f8-4a5b-8601-15df9c738078
const Image6 =
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Ftracking-min.jpg?alt=media&token=c5641197-f62e-404c-a96d-6de320555af8";
// "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const ProductsListSlide = () => {
  const imgComp = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="relative">
      <img
        src={Image6}
        alt="Product 2"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-40 text-white px-6 py-4">
        <h3 className="text-sm md:text-xl gil-med mb-0 md:mb-2">BIOWAX</h3>
        <p className="text-xs md:text-base opacity-50 ">
          Bio Medical Waste Management Solution with tracking and automated
          weight management for collection and disposal
        </p>
      </div>
    </motion.div>
  );

  const imgComp2 = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="relative">
      <img
        src={Image6}
        alt="Product 2"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-40 text-white px-6 py-4">
        <h3 className="text-sm md:text-xl gil-med mb-0 md:mb-2">TracX</h3>
        <p className="text-xs md:text-base opacity-50 ">
          SLA based Vehicle Tracking solution for Service Stations
        </p>
      </div>
    </motion.div>
  );

  const gridd = () => {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-1 md:gap-4 h-[420px] md:h-full w-full mt-4 md:mt-0 ">
        <div className="col-span-2 row-span-1 h-1/2 bg-cover bg-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-[200px]">
            <img
              src={Image6}
              alt="Product 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-40 text-white px-6 py-4">
              <h3 className="text-sm md:text-xl gil-med mb-2">AUTOXPERT</h3>
              <p className="text-xs md:text-base opacity-50">
                Easy to use, Hassle Free end-to-end ERP System for Auto
                Dealership
              </p>
            </div>
          </motion.div>
        </div>
        <div className="col-span-1 row-span-1  bg-cover bg-center">
          {imgComp}
        </div>
        <div className="col-span-1 row-span-1  bg-cover bg-center">
          {imgComp2}
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100vw]" id="products">
      <div className="w-[90%] m-auto">
        <p className="gil-bold text-3xl md:text-5xl text-primary">
          Products We offer
        </p>
        <p className="gil-reg text-md opacity-60 w-full md:w-[50%] pt-4 text-primary">
          A few of the wide range of proven products from the house of Schemax
        </p>
        <div className="pt-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-0 md:gap-4 w-full">
            <div className="col-span-2 sm:col-span-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-full">
                <img
                  src={Image1}
                  alt="Product 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-40 text-white px-6 py-4">
                  <h3 className="text-sm md:text-xl gil-med mb-2">XPPAREL</h3>
                  <p className="text-xs md:text-base opacity-50">
                    Integrated Shop Floor solution with IoT based grament level
                    tracking
                  </p>
                </div>
              </motion.div>
            </div>

            {gridd()}

            <div className="col-span-2 sm:col-span-1 mt-[-60px] md:mt-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-1/2">
                <img
                  src={Image3}
                  alt="Product 3"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-40 text-white px-6 py-4">
                  <h3 className="text-sm md:text-xl gil-med mb-2 ">eCommeX</h3>
                  <p className="text-xs md:text-base opacity-50">
                    Building your fully functional online store, quick and
                    effective
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-span-2 sm:col-span-1 mt-[-80px] md:mt-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-1/2">
                <img
                  src={Image5}
                  alt="Product 4"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-40 text-white px-6 py-4">
                  <h3 className="text-sm md:text-xl gil-med mb-2">
                    WarehouseXcel
                  </h3>
                  <p className="text-xs md:text-base opacity-50">
                    Reliable and Efficient Warehouse Management Solution to
                    manage your logistics, better
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListSlide;
