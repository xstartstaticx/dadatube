import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  vintageButton: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "#333",
    fontSize: "16px",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#eaeaea",
    },
  },
});

const VintageButton = ({ text, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.vintageButton}
      onClick={onClick}
    >
      text
    </Button>
  );
};

export default VintageButton;
