import React from "react";
import Box from "@mui/material/Box";
import BoxCat from "./BoxCat";
import Paper from "@material-ui/core/Paper";

const Dashboard = () => {
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BoxCat text="Comedy" />
        <BoxCat text="Drama" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BoxCat text="Horror" />
        <BoxCat text="Cartoons" />
      </div>
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
