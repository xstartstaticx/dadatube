import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./Context";
import noImg from "../images/no-img.jpg";
import { useNavigate, useParams } from "react-router-dom";

const Videos = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { category } = useParams();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "/videos/categorylist?category=" + category
      );
      console.log("getData videos response:", response);

      if (response.data.success)
        dispatch({
          type: "getVideos",
          payload: response.data.video,
        });
      setTotal(response.data.total);
    };
    getData();
  }, []);

  const handleClick = async (id) => {
    console.log(id);

    navigate(`/videos/${id}`);
  };

  const handleLoadMore = async () => {
    const response = await axios.get(
      "/videos/list?skip=" + state?.videos?.length
    );
    console.log(":rocket: ~ getData ~ response", response);
    if (response.data.success) {
      dispatch({
        type: "loadVideos",
        payload: response.data.videos,
      });
      setTotal(response.data.total);
    }
  };
  return (
    <div className="w-screen h-100vh flex-col ">
      <div className="flex flex-wrap gap-5 justify-center align-center max-w-[900px] m-auto h-[800px] overflow-auto border-2">
        {state.videos.map((item) => (
          <div
            key={item._id}
            className="border border-black-100 border-r-4 rounded-xl p-3"
            onClick={() => handleClick(item._id)}
          >
            <img
              src={item.image || noImg}
              alt="movie cover"
              className="h-[300px] w-[200px]"
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="w-[100px] mx-auto">
        <button onClick={handleLoadMore} className="bg-red-500 mx-auto">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Videos;
