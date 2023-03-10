import React from 'react'
import CardComponents from '../homeScreenComp/CardComponents'
import ChooseUsComponents from '../homeScreenComp/ChooseUsComponents'
import Herosection from '../homeScreenComp/Herosection'
import SkillInstructorComponent from '../homeScreenComp/SkillInstructorComponent'
import TopCategoriesComponent from '../homeScreenComp/TopCategoriesComponent'
import TopCoursesComponent from '../homeScreenComp/TopCoursesComponent'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Herosection2 from '../homeScreenComp/Herosection2'

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


const Homescreen = () => {
  // const settings = {
  //   // dots: true,
  //   fade: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   pauseOnHover:false,
  //   // adaptiveHeight:true,
  // //   nextArrow: <SampleNextArrow />,
  // // prevArrow: <SamplePrevArrow />,
  // };

  return (
    <div>
      <Herosection />
      <CardComponents />
      <ChooseUsComponents />
      <TopCategoriesComponent />
      <TopCoursesComponent />
      <SkillInstructorComponent />
    </div>
  )
}

export default Homescreen
