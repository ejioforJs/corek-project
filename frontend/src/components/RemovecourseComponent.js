import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import LoadingBox from './LoadingBox';

const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, courses: action.payload };
      case "FETCH_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

const RemovecourseComponent = () => {
    const [{ loading, error, courses }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        courses: [],
      });

      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const results = await axios.get("/api/courses");
            dispatch({ type: "FETCH_SUCCESS", payload: results.data });
          } catch (err) {
            dispatch({ type: "FETCH_FAIL", payload: err.message });
          }
        };
        fetchData();
      }, []);

      const removeCourse = async (id) => {
        window.location.reload(false)
        try{
            await axios.post('/api/courses/removeCourse', {
                id
            })
        }catch(err){
            toast.error(getError(err));
        }
      }

  return loading ? (
    <LoadingBox />
  ): error ? (
    <div>{error}</div>
  ):
  (
    <div>
      <p className="text-black text-xl font-semibold">Remove a course</p>
        {courses ? (
            <div className='mt-4'>
                <table className="border-collapse w-full">
                      <thead className="bg-[rgb(230,230,230)]">
                        <tr>
                          <th className="border-y-corekColor1 py-2.5 ...">
                            Order
                          </th>
                          <th className="border-y-corekColor1 border-gray-300 ...">
                            Name
                          </th>
                          <th className="border-y-corekColor1 border-gray-300 ...">
                            Price
                          </th>
                          <th className="border-y-corekColor1 border-gray-300 ...">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            courses.map((course, index) => (
                                <tr key={index} className="text-sm">
                              <td className="border border-gray-300 text-center p-2">
                                {index + 1}
                              </td>
                              <td className="border text-center border-gray-300 p-2">
                                {course.name}
                              </td>
                              <td className="border text-center border-gray-300 p-2">
                                ${course.price}.00
                              </td>
                              <td className='border text-center border-gray-300 p-2'>
                                <span 
                                onClick={() => removeCourse(course._id)}
                                className='flex justify-center text-red-600 cursor-pointer'><AiFillDelete /></span>
                              </td>
                            </tr>
                            ))
                        }
                      </tbody>
                </table>
            </div>
        ) : (
            <div>No courses available</div>
        )}
    </div>
  )
}

export default RemovecourseComponent
