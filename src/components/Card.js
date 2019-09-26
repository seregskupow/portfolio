import React from 'react';
import defaultimg from '../img/default.png'
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial
  } from "react-awesome-button";

export default function Card(props) {
    const {id,tools,description,img,complete} = props.data;
    let {title} = props;
  return (
    <div className="col-10 col-md-6 col-lg-6 mx-auto px-5 my-5">
      <div className="card">
           <img src={img} alt="" style={{height:"300px"}} className="image-fluid rounded"/>
           <p>{title}</p>
           <AwesomeButton size="medium"> more</AwesomeButton>
      </div>
    </div>
  );
}
Card.defaultProps = {
    img: defaultimg,
    title:"app description"
  };
  