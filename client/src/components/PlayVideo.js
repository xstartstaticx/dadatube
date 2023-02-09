import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context";
import { AiFillStar } from "react-icons/ai";

const PlayVideo = () => {
  const { id } = useParams();
  const { dispatch } = useContext(AppContext);

  const [movie, setMovie] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    videoEmbed: "",
    runtime: "",
    rating: "",
  });

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/videos/findone/?_id=" + id);
      console.log("getData play video response:", response);

      if (response.data.success) setMovie(response.data.video);
    }
    getData();
  }, []);

  return (
    <div className="max-w-[900px] text-center m-auto">
      <h1 className="text-2xl">{movie.title}</h1>
      <div className="flex ">
        <img src={movie.image} alt="" className="h-[500px]" />
        <p className="m-auto w-[300px] ">{movie.description}</p>
      </div>
      <div className="flex">
        <p className="ml-5">{movie.category}</p>
        <p className="ml-5">{movie.runtime} minutes</p>
        <p className="ml-5">{movie.rating} / 10</p>
        <AiFillStar className="mt-1 text-red-600" />
      </div>
      <iframe
        width="560"
        height="315"
        src={movie.videoEmbed}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default PlayVideo;
