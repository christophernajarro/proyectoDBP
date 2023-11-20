import React from "react";
import MenuButton from "../MenuButton";
import $ from "styled-components";
const $Nav = $.ul`
    margin-left: 45px;
`
const Items = [
  {
    text: "Todos los productos",
    isExpandible: false,
  },
  {
    text: "Polos",
    isExpandible: false,
  },
  {
    text: "Calzados",
    isExpandible: false,
  },
  {
    text: "Pantalones",
    isExpandible: false,
  },

];
const Nav = () => {
  return (
    <$Nav>
      {Items.map((item) => (
        <MenuButton text={item.text} />
      ))}
    </$Nav>
  );
};

export default Nav;