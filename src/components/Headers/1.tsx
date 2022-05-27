import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const HeaderEl = styled.header`
  display: flex;
`;

const Logo = styled.h1``;

const NavBar = styled.nav``;

const NavItems = ({ items }) => (
  <NavBar>
    {items.map((item) => (
      <Link to={item.href} key={item.label}>
        {item.label}
      </Link>
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
