import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context";
import axios from "axios";
// import {SearchBar} from  "./SearchBar"
// import { baseUrl } from '../config/baseUrl'
import images from "../images/1.png"

function Header() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(AppContext);

  const handleLogout = async () => {
    const response = await axios.get("/users/logout");
    console.log("🚀 ~ handleLogout ~ response", response);

    // const response = await axios.get(baseUrl + '/users/logout', {withCredentials: true})
    // console.log("🚀 ~ handleLogout ~ response", response)

    dispatch({
      type: "logout",
    });

    navigate("/");
  };

  return (
    <div
    className='bg-[#ed6f8f] text-[#ffeda1]
    w-full h-[100px] flex justify-center 
    items-center gap-[20px] text-[2rem]  cursor-pointer'
    >
    <img
      className='h-8 w-auto sm:h-10'
      src={images}
      alt='logo'
    />
      <Link to='/dashboard'>
        <FaHome className='hover:text-slate-600' />{" "}
      </Link>
      {/* <SearchBar /> */}
      <Link to='/profile'>
        <CgProfile className='hover:text-slate-600' />{" "}
      </Link>
      <FiLogOut
        className='hover:text-slate-600 cursor-pointer'
        onClick={handleLogout}
      />
    </div>
  );
}

export default Header;
