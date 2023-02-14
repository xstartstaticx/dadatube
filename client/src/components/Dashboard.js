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
    <>
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Welcome to DADATUBE library
        </h1>
        <h3
          style={{
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          ↓ ↓ コレクション ↓ ↓
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          // flexDirection: "column",
          maxWidth: "1000px",
          margin: "2rem auto",
          alignItems: "center",
          gap: "30px",
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

        <Link to="/videos">
          <BoxCat
            text="All Movies"
            value="videos"
            backgroundColor="#ed6f8f"
            onClick={handleCategory}
          />
        </Link>
      </div>
    </>
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
