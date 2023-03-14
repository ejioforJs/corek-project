import React, { useReducer } from "react";
import aboutbg from "../assets/about-bg.jpg";
import "../Styles/FaqScreen.css";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case 'QUES1':
      return {
        ...state,
        ques1: true,
        ques2: false,
        ques3: false,
        ques4: false,
        ques5: false,
      };
    case 'QUES2':
      return {
        ...state,
        ques1: false,
        ques2: true,
        ques3: false,
        ques4: false,
        ques5: false,
      };
    case 'QUES3':
      return {
        ...state,
        ques1: false,
        ques2: false,
        ques3: true,
        ques4: false,
        ques5: false,
      };
    case 'QUES4':
      return {
        ...state,
        ques1: false,
        ques2: false,
        ques3: false,
        ques4: true,
        ques5: false,
      };
    case 'QUES5':
      return {
        ...state,
        ques1: false,
        ques2: false,
        ques3: false,
        ques4: false,
        ques5: true,
      };
    default:
      return state;
  }
};

function FaqScreen() {
  const [{ ques1, ques2, ques3, ques4, ques5 }, dispatch] = useReducer(
    reducer,
    {
      ques1: false,
      ques2: false,
      ques3: false,
      ques4: false,
      ques5: false,
    }
  );
  

  return (
    <>
      <div className="relative">
        <img className="h-[33vh] md:h-[55vh] w-full -mt-24" src={aboutbg} alt="hero" />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] bottom-24 md:left-16">
          FREQUENTLY ASKED QUESTIONS
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Home</span>
            <span>{">"}</span>
          </div>
        </Link>
        <Link to="/faq">
          <div className="flex flex-row items-center space-x-2 duration-300  hover:text-corekColor1">
            <span>Faqs</span>
            <span>{">"}</span>
          </div>
        </Link>
      </div>
      <div className="mt-16 px-5 sm:px-10">
        <p 
        className="font-bold text-lg">
          Below are frequently asked questions about our products, you may find
          the answer for yourself
        </p>
        <p 
        className="text-gray-500 text-sm leading-6 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper
          augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.
          In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum
          sit amet. Nulla convallis mauris vitae congue consequat. Donec
          interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus
          iaculis euismod dui.
        </p>
      </div>
      <div className="mt-16 flex flex-col gap-2 justify-center items-center px-5 sm:px-10">
        <div
          onClick={() => dispatch({ type: 'QUES1' })}
          className={`${
            ques1 ? 'bg-corekColor1 text-white' : 'bg-[rgb(200,200,200)] text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Convenient User Interface
        </div>
        <div
          className={`${
            ques1 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-[rgb(230,230,230)]`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
          onClick={() => dispatch({ type: 'QUES2' })}
          className={`${
            ques2 ? 'bg-corekColor1 text-white' : 'bg-[rgb(200,200,200)] text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Aliquid esse atque eveniet fugiat ullam
        </div>
        <div
          className={`${
            ques2 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
          onClick={() => dispatch({ type: 'QUES3' })}
          className={`${
            ques3 ? 'bg-corekColor1 text-white' : 'bg-[rgb(200,200,200)] text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Tenetur, facilis neque error earum facere exercitationem!
        </div>
        <div
          className={`${
            ques3 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
          onClick={() => dispatch({ type: 'QUES4' })}
          className={`${
            ques4 ? 'bg-corekColor1 text-white' : 'bg-[rgb(200,200,200)] text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Perspiciatis ut ipsa cum molestias quaerat laborum.
        </div>
        <div
          className={`${
            ques4 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
        <div
          onClick={() => dispatch({ type: 'QUES5' })}
          className={`${
            ques5 ? 'bg-corekColor1 text-white' : 'bg-[rgb(200,200,200)] text-black'
          } px-4 font-bold py-2 cursor-pointer w-full`}
        >
          Responsive Design
        </div>
        <div
          className={`${
            ques5 ? 'max-h-56 px-4' : 'max-h-0'
          } duration-500 text-gray-500 text-sm overflow-hidden w-full bg-about-color`}
        >
          Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
          vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
          consectetur lorem eu viverra lobortis. Morbi gravida, nisi id
          fringilla ultricies, elit lorem eleifend lorem
        </div>
      </div>
    </>
  );
}

export default FaqScreen;
