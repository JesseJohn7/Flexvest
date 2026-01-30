import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/Faqs";
/* 




import Footer from "@/components/Footer"; */

export default function HomePage() {
  return (
    <>
      <Navbar/>
       <Hero /> 
       <Features />
        <HowItWorks/> 
        <Testimonials/>
         <FAQ/>
      {/*
      
     
      
     
      <Footer/> */}
    </>
  );
}
