import axios from "axios";
import noImg from "../images/no-img.jpg";
import { useContext, useState } from "react";
import { AppContext } from "./Context";

const AddVideo = () => {
  const { dispatch } = useContext(AppContext);

  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });

  const [data, setData] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    videoEmbed: "",
    runtime: "",
    rating: "",
  });

  const handleSave = async () => {
    const formdata = new FormData();

    formdata.set("title", data.title);
    formdata.set("description", data.description);
    formdata.set("category", data.category);
    formdata.set("videoEmbed", data.videoEmbed);
    formdata.set("runtime", data.runtime);
    formdata.set("rating", data.rating);

    if (fileData.file) formdata.set("image", fileData.file, "videoImage");

    const config = {
      Headers: { "content-type": "multipart/form-data" },
    };

    const response = await axios.post("/videos/add", formdata, config);
    console.log("🚀 ~ handleSave ~ response", response);

    if (response.data.success)
      dispatch({
        type: "videoSaved",
        payload: response.data.video,
      });
  };

  const handleImageChange = (e) => {
    console.log("🚀 ~ handleImageChange ~ e", e.currentTarget.files[0]);

    setFiledata({
      url: URL.createObjectURL(e.currentTarget.files[0]),
      file: e.currentTarget.files[0],
    });
  };

  console.log(data);

  return (
    <div>
      <div className="flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]">
        <div className="flex items-center gap-[10px]">
          <label className="text-[16px] ">
            Video Title:
            <input
              value={data.title}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </label>
        </div>

        <div className="flex items-center gap-[10px]">
          <label className="text-[16px] ">
            Description:
            <input
              value={data.description}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex items-center gap-[10px]">
          <label className="text-[16px] ">
            Category:
            <input
              value={data.category}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) => setData({ ...data, category: e.target.value })}
            />
          </label>
        </div>

        <div className="flex items-center gap-[10px]">
          <label className="text-[16px] ">
            YouTube Link:
            <input
              value={data.videoEmbed}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) => setData({ ...data, videoEmbed: e.target.value })}
            />
          </label>
        </div>

        <div className="flex items-center gap-[10px]">
          <label className="text-[16px] ">
            Video Length:
            <input
              value={data.runtime}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) => setData({ ...data, runtime: e.target.value })}
            />
          </label>
        </div>

        <div className="flex items-center gap-[10px]">
          <label className="text-[16px] ">
            Rating:
            <input
              value={data.rating}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) => setData({ ...data, rating: e.target.value })}
            />
          </label>
        </div>

        <label className="cursor-pointer">
          Select your cover image:
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
        <img
          className="w-[300px] h-[300px] rounded-md object-cover"
          src={fileData.url || noImg}
          alt=""
        />

        <button onClick={handleSave}>Save Profile</button>
      </div>
    </div>
  );
};

export default AddVideo;
