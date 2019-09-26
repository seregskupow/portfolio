import React from "react";
import { DataConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from 'styled-components'

export default function Navigation() {
  return (
    <DataConsumer>
      {value => {
        const { links, handleNav,navOpen } = value;
        return (
          <Nav view={navOpen} className="navigation">
            <ul>
              {links.map(link => (
                <li key={link.id}>
                  <Link to={link.path} onClick={handleNav}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
        );
      }}
    </DataConsumer>
  );
}
const Nav = styled.div`
transition:.5s all ease;
    opacity:${props=>props.view?"1":"0"};
    transform:translateY(${props=>props.view?"":"-120%"})
`;