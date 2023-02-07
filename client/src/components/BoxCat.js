import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@mui/material/Box";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     borderRadius: "20px",
//     width: 220,
//     height: 120,
//     backgroundColor: theme.palette.primary.dark,
//     "&:hover": {
//       backgroundColor: theme.palette.primary.main,
//       opacity: [0.9, 0.8, 0.7],
//     },
//   },
// }));
// const Boxcat = ({ title, children }) => {
//   const classes = useStyles();
//   return (
//     <Paper className={classes.paper}>
//       <h3>{title}</h3>
//       {children}
//     </Paper>
//   );
// };

export default function BoxCat({ text }) {
  return (
    <Box
      sx={{
        color: "white",
        border: "2px solid black",
        transition: "0.3s",
        margin: "80px",
        borderRadius: "20px",
        width: 445,
        height: 200,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // fontSize: "5px",
        "&:hover": {
          color: "black",
          backgroundColor: "white",
          opacity: [0.9, 0.8, 0.7],
          transform: "scale(1.1)",
        },
      }}
    >
      <p
        style={{
          // color: "white",
          fontSize: "30px",
          transition: "0.3s",
          "&:hover": {
            // color: "black",
          },
        }}
      >
        {text}
      </p>
    </Box>
  );
}

// export default Box;
