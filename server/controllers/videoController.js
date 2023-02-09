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
    const videos = await Video.find().limit(3).skip(skip);
    const total = await Video.countDocuments();
    console.log(":rocket: ~ module.exports.list= ~ total", total);
    res.send({ success: true, videos, total });
  } catch (error) {
    console.log(":rocket: ~ product list error", error.message);
    res.send({ success: false, error: error.message });
  }
};
