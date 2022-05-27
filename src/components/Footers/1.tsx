import React from "react";
import { Link } from "react-router-dom";
import * as Typography from "../Typography";

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
      <Typography.Headers.H4>{name}</Typography.Headers.H4>
    </Link>
    <NavItems items={navItems} />
  </FooterEl>
);

export default Footer;
