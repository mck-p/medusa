import React from "react";
import { Link } from "react-router-dom";

import * as Typography from "../Typography";

import styled from "@emotion/styled";

const HeaderEl = styled.header`
  display: flex;
`;

const Logo = styled.h1``;

const NavBar = styled.nav``;

interface Item {
  href: string;
  label: string;
}

const NavItems = ({ items }: { items: Item[] }) => (
  <NavBar>
    {items.map((item) => (
      <Link to={item.href} key={item.label}>
        {item.label}
      </Link>
    ))}
  </NavBar>
);

const Header = ({ name, navItems }: { name: string; navItems: Item[] }) => (
  <HeaderEl>
    <Link to="/">
      <Typography.Headers.H1>{name}</Typography.Headers.H1>
    </Link>
    <NavItems items={navItems} />
  </HeaderEl>
);

export default Header;
