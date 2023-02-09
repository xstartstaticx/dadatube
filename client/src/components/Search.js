// import { Input, InputAdornment } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";

// const Search = () => {
//   return (
//     <Input
//       placeholder='Search'
//       startAdornment={
//         <InputAdornment position='start'>
//           <SearchIcon />
//         </InputAdornment>
//       }
//     />
//   );
// };
// export default Search;

// const navigate = useNavigate()

import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { AppContext } from "./Context";
import logo from "../images/1.png";

function Search() {
  const {
    cart,
    setCart,
    products,
    setProducts,
    categories,
    setCategories,
    topProducts,
    setTopProducts,
    state,
    dispatch,
  } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      // console.log(data)
      setProducts(data);
    };
    getProducts();

    const getCategories = async () => {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories",
      );
      const data = await response.json();
      // console.log(data)
      setCategories(data.slice(0, 4));
    };
    getCategories();

    const getTopProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      // console.log(data)
      setTopProducts(data.slice(0, 8));
    };
    getTopProducts();
  }, []);

  const handleCartClick = () => {
    if (cart.length === 0) {
      return alert("Cart is empty!!");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div>
      <div className='flex items-end justify-around h-[8rem] gap-3 border-amber-500 bg-slate-200 p-2'>
        <Link to='/'>
          <img src={logo} alt='' className='ml-3 w-[100px]' />
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/searchResults");
            if (e.key === "Enter") {
            }
          }}
          action=''
          className='flex items-center text-amber-500 gap-2 b-2'
        >
          <Link to='/'>
            <GoHome className='text-[2.2rem] mb-1 ' />
          </Link>
          <BsSearch className='text-[2rem] mb-2 text-black' />
          <input
            type='text'
            className='mb-2 rounded-2xl p-2 pl-5 w-[40%]'
            placeholder='Search'
            inputProps={{ "aria-label": "search" }}
            value={state.searchText}
            onChange={(e) =>
              dispatch({
                type: "search",
                payload: e.target.value,
              })
            }
          />

          <IconButton onClick={handleCartClick} aria-label='cart'>
            <Badge
              badgeContent={cart?.length}
              color='secondary'
              className='text-amber-500 '
            ></Badge>
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Search;
