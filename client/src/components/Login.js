import { useContext, useState, useEffect } from "react";
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
import Header from "./Header";

const Login = () => {
  const { dispatch, background } = useContext(AppContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    emailOrUsername: "",
    password: "",
  });

  console.log("data state in login: ", data);

  const handleLogin = async () => {
    const response = await axios.post("/users/login", data);
    console.log("handleLogin response:", response);

    if (response.data.success) {
      dispatch({
        type: "login",
        payload: response.data.user,
      });

      navigate("/dashboard");
    }
  };
  console.log(background);
  return (
    <CssVarsProvider>
      <Header />
      <main
        // className={`border-2 w-screen h-screen  ${
        //   background ? "bg-white" : "bg-black"
        // }`}
        style={{
          border: "1px solid #202D33",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#202D33",
        }}
      >
         <Sheet
          sx={{
            width: 600,
            mx: "auto", // margin left & right
            my: 20, // margin top & bottom
            py: 6, // padding top & bottom
            px: 6, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
            backgroundColor: "#70BBB1",
          }}
          variant='outlined'
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Who are you?</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="enter your email or username"
              value={data.emailOrUsername}
              onChange={(e) =>
                setData({ ...data, emailOrUsername: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Are you authorized to be here?</FormLabel>
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
            onClick={handleLogin}
            sx={{ mt: 1 /* margin top */ }}
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/register">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
};

export default Login;
