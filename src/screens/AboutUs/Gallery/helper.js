import { dir } from ".";

export const setDesktopCursorBehavior = (
  cursorButtonRef,
  containerRef,
  setDirection,
  regionRef,
  buttonOnClick,
) => {
  let cursorButton = cursorButtonRef.current;

  cursorButtonRef.current.style.zIndex = null;
  cursorButton.style.right = '-3%';
  cursorButton.style.bottom = '-10%';
  let interval = null;
  containerRef.current.onclick = buttonOnClick;
  const getDirection = (pageX) => {
    if (
      pageX - containerRef.current.offsetLeft + 0 >
      containerRef.current.offsetWidth / 2
    )
      setDirection(dir.RIGHT);
    else setDirection(dir.LEFT);
    regionRef.current.onmouseout = () => {
      setDirection(dir.RIGHT);
      clearInterval(interval);
      containerRef.current.style.cursor = null;
      cursorButton.style.transform = null;
      regionRef.current.onmousemove = null;
      cursorButton.style.width = null;
      cursorButton.style.transition = '0.5s ease 0s';
      cursorButton.style.right = '-3%';
      cursorButton.style.bottom = '-10%';
    };
  };

  function moveAt(e) {
    cursorButton.style.transform = 'scale(0.68)';
    cursorButton.style.right =
      containerRef.current.offsetWidth -
      (e.pageX -
        containerRef.current.offsetLeft +
        cursorButton.offsetWidth / 2) +
      'px';
    cursorButton.style.bottom =
      containerRef.current.offsetHeight -
      (e.pageY -
        containerRef.current.offsetTop +
        cursorButton.offsetHeight / 2) +
      'px';
    getDirection(e.pageX);
  }
  regionRef.current.onmouseover = (event) => {
    cursorButton.style.transition = 'width 0.2s';
    // cursorButton.style.transform = 'scale(1)';

    let mouseX = event.pageX,
      mouseY = event.pageY,
      t = 56,
      tn = 0;
    interval = setInterval(() => {
      let rx =
        mouseX -
        cursorButton.offsetLeft -
        containerRef.current.offsetLeft -
        cursorButton.offsetWidth / 2;
      let ry =
        mouseY -
        cursorButton.offsetTop -
        containerRef.current.offsetTop -
        cursorButton.offsetHeight / 2;
      let vx0 = rx / t,
        vy0 = ry / t,
        Sxn = tn * vx0,
        Syn = tn * vy0;
      tn += 2;
      cursorButton.style.transform = `translate(${Sxn + 'px'}, ${
        Syn + 'px'
      }) scale(${1 - (0.32 * Sxn) / rx})`;
      getDirection(event.pageX);
      if (!(Sxn != rx && Syn != ry)) {
        regionRef.current.onmousemove = (e) => {
          moveAt(e);
        };
        containerRef.current.style.cursor = 'none';
        clearInterval(interval);
      }
    }, 8);
    regionRef.current.onmousemove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };
  };
};
