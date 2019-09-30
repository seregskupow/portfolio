

// $("body").mousemove(function(e) {
//     parallaxIt(e, ".banner", -90);
//     parallaxIt(e, ".move_js", -20);
//     parallaxIt(e, ".flamingo", -20);
//     parallaxIt(e, ".kaktus", -20);

//     // parallaxIt(e, ".products", -20);
//     // parallaxIt(e, ".product", -60);
//     // parallaxIt(e, "body", -30);
//   });
  
//   function parallaxIt(e, target, movement) {
//     var $this = $("body");
//     var relX = e.pageX - $this.offset().left;
//     var relY = e.pageY - $this.offset().top;
  
//     TweenMax.to(target, 1, {
//       x: (relX - $this.width() / 2) / $this.width() * movement,
//       y: (relY - $this.height() / 2) / $this.height() * movement
//     });
//   }


  document.body.addEventListener('mousemove',(e)=>{
    if(window.innerWidth>992)
      parallaxIt(e, ".parallax", -50);
    // parallaxIt(e, ".travolta", -90);
  });

  

  parallaxIt = (e,target,movement)=>{
    var this_ = document.body;
    var relX = e.pageX - this_.clientLeft;
    var relY = e.pageY - this_.clientTop;

    let item = document.querySelector(`${target}`);
    // item.style.perspective="500px";
    item.style.transform = `translate(${(relX - 2000) / 4000 * movement}px,${(relY - 2000 / 2) / 4000 * movement}px)`;
    // item.style.transform=` rotateX(0deg) rotateY(${e.pageY/50}deg) rotateZ(0deg)`
    // item.style.top=`${(relX - 2000) / 2000 * movement}px`;
    // item.style.left=`${(relY - 2000 / 2) / 2000 * movement}px`
  }
