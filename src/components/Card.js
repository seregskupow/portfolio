import React, { useEffect, useRef } from 'react';
import defaultimg from '../img/default.png'
import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import { getDiffieHellman } from 'crypto';

export default function Card(props) {
  const { id, tools, description, img, complete,url } = props.data;
  let { title } = props;
  let target = useRef(null);
  let target2 = useRef(null);
  
  const cardAnimation = (el, param) => {
    let tl = new TimelineMax({ paused: true });
    let arr = [...el.lastChild.lastChild.firstChild.children];
    if (param===true) {
      
      tl.to(el, 0, { scale: 1, ease: Power3.easeOut }).staggerTo(arr, 1, { y: 0, opacity: 1,ease: Elastic.easeOut }, 0.1);
       tl.play();
    }

    else {
      
      tl.to(el, 0, { scale: 1, ease: Power3.easeOut }).staggerTo(arr, .5, { y: -20, opacity: 0,ease: Elastic.easeIn }, 0.1);
      tl.play();
    }

  }
  
  useEffect(() => {
    
    console.log(target)
   
  }, [])
  // 



  const getId = (elem) => {
    console.log(elem)
  }

  return (

    <div className="card" ref={el => target = el} onMouseOver={()=>{cardAnimation(target, true)}} onMouseLeave={()=>{cardAnimation(target, false)}}>
      <img src={img} alt="" style={{ height: "300px" }} className="image-fluid rounded card-img-top" />
      <div className="card-body">
        <p className="text-uppercase haha" >{title}</p>
        <div className="text-center pt-3 " style={{ width: "100%" }}>
          <div className="d-flex tools">{tools.map(tool => (
            <div className="tool">{tool}</div>
          ))}</div>
          <a href={url}><AwesomeButton size="medium" className="more-btn"> Follow</AwesomeButton></a>
        </div>

      </div>



    </div>
  );
}
Card.defaultProps = {
  img: defaultimg,
  title: "app description"
};
