import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import axios from "axios";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { dispatch, background } = useContext(AppContext);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("/users/register", data);
      console.log("handleRegister ~ response:", response);

      if (response.data.success) {
        navigate("/");
      }
      //   else {
      //     if (response.data.errorId === 2)
      //       alert("Username must be more than 2 characters");
      //   }
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  return (
    <CssVarsProvider>
      <main
        // className={`border-2 w-screen h-screen  ${
        //   background ? "bg-white" : "bg-black"
        // }`}
        style={{
          border: "1px solid red",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#202D33",
        }}
      >
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">
              Please register a new account.
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Create a unique username:</FormLabel>
            <Input
              // html input attribute
              name="username"
              type="text"
              placeholder="enter your username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>What's your email?</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="enter your email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Create a good password:</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="enter your password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </FormControl>

          <Button
            type="submit"
            onClick={handleRegister}
            sx={{ mt: 1 /* margin top */ }}
          >
            Sign me up!
          </Button>
          <Typography
            endDecorator={<Link href="/">Login</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Have an account already?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
};

export default Register;
