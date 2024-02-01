import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Products from "../../Components/Products/Products";
import Agentbrands from "../../Components/Agentbrands/Agentbrands";
import BrandSeries from "../../Components/BrandSeries/BrandSeries";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import Team from "../../Components/Team/Team";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";
import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs";
import FastDelivery from "../../Components/FastDelivery/FastDelivery";
import Footer from "../../Components/Footer/Footer";
import Footer_1 from "../../Components/Footer/Footer_1";
import PhonesList from "../../Components/PhonesList/PhonesList";

const Home = () => {
  return (
    <>
    <div className=" bg-[#f2f5f7] h-auto">
      <Topbar/>
      <div className="md:bg-[#f2f5f7] w-screen flex  justify-center mt-5 ">
      <Navbar/>
      
      </div>
      {/* <PhonesList/> */}
      <Slider/>
     
    </div>
    <Products/>
    <Agentbrands/>
    <BrandSeries/>
    <AboutUs/>
    <LatestProducts/>
    <WhoWeAre/>
    <Team/>
    <VideoGallery/>
    <LatestBlogs/>
    <FastDelivery/>
    <Footer_1/>
    </>
  );
};

export default Home;
