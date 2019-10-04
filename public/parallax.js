


document.body.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 992)
    parallaxIt(e, ".parallax", -50);
  // parallaxIt(e, ".travolta", -90);
});



parallaxIt = (e, target, movement) => {
  var this_ = document.body;
  var relX = e.pageX - this_.clientLeft;
  var relY = e.pageY - this_.clientTop;

  let item = document.querySelector(`${target}`);

  item.style.transform = `translate(${(relX - 2000) / 4000 * movement}px,${(relY - 2000 / 2) / 4000 * movement}px)`;

}
