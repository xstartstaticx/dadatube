import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./Context";
import noImg from "../images/no-img.jpg";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/videos/list");
      console.log("getData videos response:", response);

      if (response.data.success)
        dispatch({
          type: "getVideos",
          payload: response.data.videos,
        });
    };
    getData();
  }, []);

  //   const handleClick = () => {
  //     navigate(`/videos/:${state.videos.title}`);
  //   };

  return (
    <div className="flex flex-wrap gap-5 justify-center align-center max-w-[900px] m-auto">
      {state.videos.map((item) => (
        <div
          key={item._id}
          className="border border-black-100 border-r-4 rounded-xl p-3"
          //   onClick={handleClick}
        >
          <img src={item.image || noImg} alt="movie cover" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Videos;
