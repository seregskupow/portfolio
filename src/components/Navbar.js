import React from "react";
import { DiAtom } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { DataConsumer } from "../context";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import Navigation from './Navigation'

export default function Navbar() {
  return (
    <DataConsumer>
      {value => {
        const { navOpen, closeNav, handleNav } = value;

        return (
          <nav className="navig pb-3">
            <NavBar height={navOpen} className="nav-center mx-auto">
              <div className="icon">
                <Link to={"/"} onClick={closeNav}><DiAtom/></Link>
              </div>
              <div className="icon">
                <FaBars onClick={handleNav} />
              </div>
            </NavBar>
            <Navigation/>
          </nav>
        );
      }}
    </DataConsumer>
  );
}
const NavBar = styled.div`
transition: .5s all ease;
padding-bottom:${props =>props.height?"91vh":""}`;
