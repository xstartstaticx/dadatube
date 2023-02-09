import React from "react";
import { Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <Input
      placeholder='Search'
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};
export default Search;
