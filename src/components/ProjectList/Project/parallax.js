
export function parallax(e, elem, imgs) {
 
  let _w = elem.offsetWidth / 2;
  let _h = elem.offsetHeight / 2;
  let _mouseX = e.clientX - elem.getBoundingClientRect().x;
  let _mouseY = e.clientY - elem.getBoundingClientRect().y;
  let _depth = [
    `${(_mouseX - _w) * 0.01}%, ${(_mouseY - _h) * 0.01}%`,
    `${(_mouseX - _w) * 0.02}%, ${(_mouseY - _h) * 0.02}%`,
    `${(_mouseX - _w) * 0.06}%, ${(_mouseY - _h) * 0.06}%`,
  ];
  imgs.forEach((img, i) => {
    img.style.transition = null;
    img.style.transform = `translate(${_depth[i]})`;
  });
}


export function parallaxMouseLeave(imgs) {
  imgs.forEach((img, i) => {
    img.style.transition = "transform 200ms"
    img.style.transform = `translate(0%,0%)`;
    
  });
}
