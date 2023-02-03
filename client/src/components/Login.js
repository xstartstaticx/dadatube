import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";

const Login = () => {
  const { dispatch } = useContext(AppContext);

  const navigate = useNavigate;

  const [data, setData] = useState({
    emailOrUsername: "",
    password: "",
  });

  return <div>hello</div>;
};

export default Login;
