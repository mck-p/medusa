import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderEl = styled.header`
  display: flex;
  flex-flow: row-reverse;
`;

const Logo = styled.h1``;

const NavBar = styled.nav``;

const NavItems = ({ items }) => (
  <NavBar>
    {items.map((item) => (
      <Link to={item.href}>{item.label}</Link>
    ))}
  </NavBar>
);

const Header = ({ name, navItems }) => (
  <HeaderEl>
    <Link to="/">
      <Logo>{name}</Logo>
    </Link>
    <NavItems items={navItems} />
  </HeaderEl>
);

export default Header;
