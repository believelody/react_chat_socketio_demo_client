import React from "react";
import styled from "styled-components";

const SearchInputStyle = styled.input`
  margin-right: 10px;
  border-radius: 10px;
`;

const SearchInput = ({ value, handleChange }) => {
  return (
    <SearchInputStyle
      value={value}
      type="search"
      placeholder="Search a contact"
      onChange={e => handleChange(e.target.value)}
    />
  );
};

export default SearchInput;
