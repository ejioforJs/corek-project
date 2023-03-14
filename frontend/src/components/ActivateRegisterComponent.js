import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import courseHeroimg from "../assets/singleCourseHero.jpg";
import { getError } from "../utils";
// const hash = req.query.hash;

const ActivateRegisterComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const hash = queryParams.get("hashs");
    const fetchData = async () => {
      try {
        if (!hash) {
          // return res.status(401).json({message: 'Cannot Validate an User!'})
          toast.error("cannot validate user");
        }
        await axios.get(
          `http://localhost:4000/api/users/activate/${hash}`
        );
          navigate("/users/activated");
          return toast.success("account successfully activated");
      } catch (error) {
        toast.error(getError(error));
      }
    };
    fetchData();
    // async function fetchData(req,res) {
    //   if (response.status >= 400) {
    //     //   return res.status(401).json({message: 'Cannot Validate a User!'})
    //     toast.error("cannot validate user");
    //     // return;
    //   } else {
    //     toast.success("account successfully activated")
    //     //   res.writeHead(307, { Location: '/users/activated' });
    //     //   res.end();
    //     navigate("/users/activated");
    //   }
    // }
    // fetchData();
  }, [location.search, navigate]);
  return (
    <div>
      <div className="relative">
        <img
          className="h-[33vh] md:h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] bottom-24 md:left-16">
          ACCOUNT ACTIVATED
        </div>
      </div>
    </div>
  );
};

export default ActivateRegisterComponent;
