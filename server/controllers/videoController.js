import Video from "../models/Video.js";
// import { videos } from "../data/data.js";

// export const list = async (req, res) => {
//   try {
//     const skip = req.query.skip === undefined ? 0 : Number(req.query.skip);
//     const videos = await Video.find().limit(3).skip(skip).select("-__v");
//     const total = await Video.countDocuments();

//     res.send({ success: true, videos, total });
//   } catch (error) {
//     console.log("video list error:", error.message);

//     res.send({ success: false, error: error.message });
//   }
// };

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

export const list = async (req, res) => {
  try {
    console.log(":rocket: ~ product list hello", req.query);
    const skip = req.query.skip === undefined ? 0 : Number(req.query.skip);
    const videos = await Video.find().limit(6).skip(skip);
    const total = await Video.countDocuments();
    console.log("list videos ~ total", total);
    res.send({ success: true, videos, total });
  } catch (error) {
    console.log("videos list error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    console.log("video findone", req.query);
    const video = await Video.findOne(req.query);
    console.log("single video found:", video);
    res.send({ success: true, video });
  } catch (error) {
    console.log("videos findOne error:", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const categorylist = async (req, res) => {
  try {
    console.log("video category find", req.query);
    const video = await Video.find({ category: req.query.category });
    console.log("category video found:", video);
    res.send({ success: true, video });
  } catch (error) {
    console.log("videos category error:", error.message);
    res.send({ success: false, error: error.message });
  }
};
