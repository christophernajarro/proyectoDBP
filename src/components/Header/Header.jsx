import React from "react";
import Logo from "../Logo";
import SearchBar from "./../SearchBar";
import Container from "./../Container";
import FlexWrapper from "./../FlexWrapper";
import $ from "styled-components";
import LocationButton from "./../LocationButton";
import Nav from "./../Nav";
import { Link } from 'react-router-dom';
import UserAcc from "../UserAcc";


const $CreditImg = $.img`
  max-width: 340px;
`;
const $Header = $.header`
  background-color: #fff159;
  margin: 0;
  padding: 7px;
  color: #8f8f8f !important;
  box-shadow: var(--shadow);
`;
const Header = () => {
  return (
    <$Header>
      <Container>
        <FlexWrapper>
          <Logo />
          <SearchBar />
        </FlexWrapper>
        <FlexWrapper justify={"unset"} margin={"10px 0 0 0"}>
          <LocationButton />
          <Nav />
          <UserAcc />
        </FlexWrapper>
      </Container>
    </$Header>
    
  );
};

export default Header;