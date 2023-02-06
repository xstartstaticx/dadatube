import React from "react";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        width: 420,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
};

export default Dashboard;
