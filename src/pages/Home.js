import React from "react";
import Img from "../img/reactpng2.png";
import { DataConsumer } from "../context";
import styled from "styled-components";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styles from "react-awesome-button/src/styles/themes/theme-c137";

export default function Home() {
  return (
    <DataConsumer>
      {value => {
        const { navOpen, handleNav } = value;

        return (
          <HomePage show={navOpen} className="home mt-5">
            <div className="home-content container mt-5 parallax">
              <div className="row">
                <div className="col-10 col-sm-8 col-md-6 col-lg-6 my-auto">
                  <div className="text">
                    <h1 className="text-uppercase">hello!</h1>
                    <p className="mt-5">
                      My name is Sergey Skupow. I am beginer enthusiastic react
                      developer, who wants to start a carrer in the succesfull
                      company and develop my skills! make it right for Marsellus
                      to throw Antwone into a glass motherfuckin' house, fuckin'
                      up the way the nigger talks. Motherfucker do that shit to
                      me, he better paralyze my ass, 'cause I'll kill the
                      motherfucker, know what I'm sayin'?
                    </p>
                  </div>
                  <div className="text-center" style={{width:"100%"}}>
                  <AwesomeButtonProgress
                  
                    ripple
                    size="large"
                    type="primary"
                    action={(element, next) => {
                        // action('clicked');
                        
                        setTimeout(() => {
                          next();
                        }, 600);
                      }}
                      
                    >
                    <span className="text-uppercase">download cv</span>
                  </AwesomeButtonProgress>
                  </div>
                </div>
                <div className="col-10 col-sm-8 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center mt-5">
                  <img
                    src={Img}
                    style={{ maxHeight: "320px",maxWidth:"320px" }}
                    className="img-fluid rounded react"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </HomePage>
        );
      }}
    </DataConsumer>
  );
}
const HomePage = styled.section`
  /* transition: 0.6s all ease-out;
  opacity: ${props => (props.show ? "0" : "1")}; */
`;
