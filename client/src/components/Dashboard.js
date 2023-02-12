import React, { useState } from "react";
import BoxCat from "./BoxCat";
import { Link } from "react-router-dom";
import { fontSize } from "@mui/system";

const Dashboard = () => {
  const [category, setCategory] = useState("");

  const handleCategory = (e) => {
    setCategory(() => e.target.value);
    console.log(category);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto auto",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", marginTop: "2rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            position: "relative",
            textAlign: "center",
          }}
        >
          Welcome to DADATUBE library
        </h1>
        <h3
          style={{
            fontSize: "1rem",
            position: "relative",
            textAlign: "center",
          }}
        >
          What do you feel like watching today?
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6rem",
        }}
      >
        <Link to="/videoscategory/comedy">
          <BoxCat
            text="Comedy"
            value="comedy"
            backgroundColor="#ffeda1"
            onClick={handleCategory}
          />
        </Link>
        <Link to="/videoscategory/drama">
          <BoxCat
            text="Drama"
            value="drama"
            backgroundColor="#70c6db"
            onClick={handleCategory}
          />
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/videoscategory/horror">
          <BoxCat
            text="Horror"
            value="horror"
            backgroundColor="#70bbb1"
            onClick={handleCategory}
          />
        </Link>
        <Link to="/videoscategory/cartoon">
          <BoxCat
            text="Cartoons"
            value="cartoon"
            backgroundColor="#ed6f8f"
            onClick={handleCategory}
          />
        </Link>
      </div>
      <Link to="/videos">{<button>All Movies</button>}</Link>
    </div>
  );
};

export default Dashboard;
// export default function BoxSx() {
//   return (
//     <Box
//       sx={{
//         borderRadius: "20px",
//         width: 220,
//         height: 150,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }
