import Video from "../models/Video.js";
// import { videos } from "../data/data.js";

export const list = async (req, res) => {
  try {
    const videos = await Video.find().select("-__v");

    res.send({ success: true, videos });
  } catch (error) {
    console.log("video list error:", error.message);

    res.send({ success: false, error: error.message });
  }
};

export const add = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file", req.file);

    if (req.file) req.body.image = req.file.path;

    const video = await Video.create(req.body);

    console.log(" ~ create ~ video", video);

    if (!video) return res.send({ success: false, errorId: 1 }); // video not found

    res.send({ success: true, video });
  } catch (error) {
    console.log("video add error:", error.message);

    res.send({ success: false, error: error.message });
  }
};

// only use ONCE to add data!!
// Video.insertMany(videos);
