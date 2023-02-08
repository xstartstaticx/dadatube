import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import axios from "axios";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import noImg from "../images/no-img.jpg";
import { useContext, useState } from "react";
import { AppContext } from "./Context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const hobbies = ["Tennis", "Movies", "Traveling", "Golf"];

const AddMovie = () => {
  const { state, dispatch } = useContext(AppContext);

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
    runtime: 0,
    rating: 0,
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
            Movie Title:
            <input
              value={data.title}
              className="border-2 ml-3 border-slate-500 p-[5px] w-[200px] h-[40px]"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </label>
        </div>

        <div className="flex items-center gap-[10px]">
          <HiOutlineMail className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.email}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
            disabled
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <GoLocation className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <BsFillCalendarMonthFill className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
          />
        </div>

        <label className="cursor-pointer">
          Select your movie cover
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
        <img
          className="w-[300px] h-[300px] rounded-md object-cover"
          src={fileData.url || noImg}
          alt=""
        />

        {/* <Box sx={{ minWidth: 400 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.gender}
              label="Age"
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

        <button onClick={handleSave}>Save Profile</button>
      </div>
    </div>
  );
};

export default AddMovie;
