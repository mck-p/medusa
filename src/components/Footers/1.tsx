import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const FooterEl = styled.footer`
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

const Footer = ({ name, navItems }) => (
  <FooterEl>
    <Link to="/">
      <Logo>{name}</Logo>
    </Link>
    <NavItems items={navItems} />
  </FooterEl>
);

export default Footer;
