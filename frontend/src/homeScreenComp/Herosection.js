import React from "react";
import image3 from "../assets/image3.jpg";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         color: 'white',
//         borderRadius: '50%',
//         outline: 'none',
//         background: '#73d9bc',
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         color: 'white',
//         background: '#73d9bc',
//         borderRadius: '50%',
//       }}
//       onClick={onClick}
//     />
//   );
// }

const Herosection = () => {
  // const settings = {
  //   dots: true,
  //   fade: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   pauseOnHover:false,
  //   adaptiveHeight:true,
  //   nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  // };
  return (
      <div className="relative">
      <img className="h-[70vh] md:h-screen w-full -mt-24" src={image3} alt="hero" />
      <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-black to-black"></div>
      <div className="absolute w-full px-4 md:px-auto md:w-auto z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white text-xl md:text-6xl font-bold">CRYPTO</p>
        <p className="text-white text-xl md:text-6xl font-thin mt-1">Trading Course</p>
        <p className="text-gray-300 text-sm mt-4">
          This Trading Course Is The #1 Cryptocurrency Trading Course. Traders
          Use To Learn, Practise and Drastically Improve. Their Investment
          Results.
        </p>
        <Link to="/courses" className="border text-white rounded-md border-corekColor1 w-auto py-3 px-5 mt-6 md:mt-10 hover:bg-corekColor1 hover:text-black duration-500">
          EXPLORE COURSES NOW
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
