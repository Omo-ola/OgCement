"use client";
import React from "react";
import { Header, Logo, Nav, NavLink, OrderButton } from "./Styled";
import Link from "next/link";

function Navbar() {
  return (
    <Header>
      <Link href={"/"}>
        <Logo>OgCement</Logo>
      </Link>
      <Nav>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#brands">Cement Brands</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
        <OrderButton>
          <Link href="/order">Order Now</Link>
        </OrderButton>
      </Nav>
    </Header>
  );
}

export default Navbar;
