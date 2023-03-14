import axios from "axios";
import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { toast } from 'react-toastify';
import LoadingBox from "./LoadingBox";

const AddcourseComponent = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [skill_level, setSkill_level] = useState("");
  const [language, setLanguage] = useState("");
  const [instructorImg1, setInstructorImg1] = useState("");
  const [instructorImg2, setInstructorImg2] = useState("");
  const [aka, setAka] = useState("");
  const [instructorInfo, setInstructorInfo] = useState("");

  const submitHandler = async () => {
    setLoading(true);
    if (
      !name ||
      !slug ||
      !author ||
      !category ||
      !price ||
      !rating ||
      !description ||
      !duration ||
      !skill_level ||
      !language ||
      !aka ||
      !instructorInfo
    ) {
        toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
          return;
    }
    try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        await axios.post(
          "/api/courses/addCourse",
          {
            name,
            slug,
            author, 
            category,
            price,
            image,
            image2, 
            rating,
            description,
            duration,
            skill_level,
            language,
            instructorImg1,
            instructorImg2,
            aka,
            instructorInfo
          },
          config
        );
        toast({
          title: "Course added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      } catch (error) {
        toast.error("Oooops, an error occured!!");
        setLoading(false);
      }
  };

  const postDetails = async (pics, setpic) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "corek-project");
      data.append("cloud_name", "dltwxrndj");
      fetch("https://api.cloudinary.com/v1_1/dltwxrndj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setpic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };
  return (
    <div>
      <p className="text-black text-xl font-semibold">Add a course</p>
      <form className="text-gray-500" onSubmit={submitHandler}>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label className="flex flex-row gap-0.5 font-semibold" htmlFor="name">
            Enter the name of the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="price"
          >
            Enter the name of the slug of the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="slug"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="author"
          >
            Enter the name of the author of the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="author"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="category"
          >
            Enter the category of the course e.g Forex, Cryptocurrency, Digital
            marketing or Stock trading.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="category"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="price"
          >
            Enter the price of the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="price"
            type="number"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="image"
          >
            Enter the first image of the course n:b must be 400px by 300px.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0], setImage)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="image"
            type="file"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="image2"
          >
            Enter the second image of the course n:b must be 1020px by 680px.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0], setImage2)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="image2"
            type="file"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="rating"
          >
            Enter the initial rating of the course e.g 1, 1.5, 2, 2.5, 3 e.t.c.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="rating"
            type="number"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="description"
          >
            Enter a description of the course i.e a short brief note describing
            the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="description"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="duration"
          >
            Enter the duration of the course e.g 25 hours, 31 minutes e.t.c.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="duration"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="skill_level"
          >
            Enter the skill level for the course e.g Beginner, amateur,
            professional, expert e.t.c.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={skill_level}
            onChange={(e) => setSkill_level(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="skill_level"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="language"
          >
            Enter the language of the course e.g English, french, spanish e.t.c.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="language"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="instructorImg1"
          >
            Enter the first image of the instructor of the course n:b must 50px
            by 50px.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0], setInstructorImg1)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="instructorImg1"
            type="file"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="instructorImg2"
          >
            Enter the second image of the instructor of the course n:b must
            110px by 110px.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0], setInstructorImg2)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="instructorImg2"
            type="file"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label className="flex flex-row gap-0.5 font-semibold" htmlFor="aka">
            Enter the aka of the instructor of the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={aka}
            onChange={(e) => setAka(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="aka"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="instructorInfo"
          >
            Enter a brief info about the instructor of the course.
            <span className="text-[8px] text-red-500">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={instructorInfo}
            onChange={(e) => setInstructorInfo(e.target.value)}
            className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
            name="instructorInfo"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="text-black float-right border border-corekColor1 hover:bg-white bg-corekColor1 text-sm font-bold px-4 rounded py-2 duration-500 mb-2"
        >
          {
            loading ? (
              <LoadingBox />
            ): (
              "Submit"
            )
          }
        </button>
      </form>
    </div>
  );
};

export default AddcourseComponent;
