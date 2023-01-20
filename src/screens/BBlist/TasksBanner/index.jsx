import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Icon } from "../../../components/Icon";
import {
  Engine,
  Render,
  Composite,
  Body,
  Bodies,
  Events,
  Collision,
  Constraint,
  MouseConstraint,
} from "matter-js";

const landscape800 = 800;
const landscape384 = 384;
export default ({ titlePart1, titlePart2, tags }) => {
  const engine = useRef(Engine.create());
  const boxes = useRef([]);
  const bodies = useRef([]);
  const blockRef = useRef(null);
  const mouseConstraint = useRef(null);
  const resizeTimeout = useRef(null);
  const windowWidth = useRef(window.innerWidth);
  const removeConstranits = (index) => {
    if (bodies.current[index + 3]) {
      Composite.remove(engine.current.world, bodies.current[index + 3]);
      Composite.remove(engine.current.world, bodies.current[index + 4]);
      bodies.current[index + 3] = null;
      bodies.current[index + 4] = null;
    }
  };
  const getBorderRadius = () =>{
    const windowW = windowWidth.current, minRadius = 8, coef = 52;
    if(windowW>landscape800) return minRadius*2;
    else if(windowW < landscape384) return minRadius;
    else return minRadius*2-(landscape800 - windowW)/coef; 
  }
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout.current && !(windowWidth.current === window.innerWidth)) {
      
      resizeTimeout.current = setTimeout(function () {
        windowWidth.current = window.innerWidth;
        resizeTimeout.current = null;
        initWorld();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 100);
    }
  }
  
  const getRandomSign = () => (Math.random() < 0.5 ? -1 : 1);
  const initWorld = () => {
    Composite.clear(engine.current.world);
    Engine.clear(engine.current);
    boxes.current = [];
    bodies.current = [];
    const borderRadius = getBorderRadius();
    let bodiesDom = document.querySelectorAll(`.${styles.box}`);
    let container = blockRef.current;
    let containerW = container.offsetWidth,
      containerH = container.offsetHeight,
      wallWidth = 100,
      wallOffset = 50,
      constantLength = 10, 
      coef = 1/400;
let tags1 = JSON.parse(JSON.stringify(tags))
    let wallopts = {
      isStatic: true,
      restitution: 0.8,
      friction: 1,
    };
    let wallAngleOpts = {
      isStatic: true,
      angle: 0.7854
    };
    if(window.innerWidth<500){
      tags1[2].top = -1000;
      tags1[2].left = -1000;
      tags1[5].top = 0.6;
      tags1[5].left = 0.5;
      tags1[4].top = 0.85;
      tags1[4].left = 0.35;
      coef = 1/1000;
      constantLength = 5;
    }else
    if(window.innerWidth<800){
      constantLength = 5;
      coef = 1/600;
      tags1[5].left = 0.55;
      tags1[5].top = 0.6;
      tags1[4].top = 0.85;
    }else
    if(window.innerWidth<1500){
      tags1[5].left = 0.63;
      tags1[4].top = 0.8;
    }
    
    mouseConstraint.current = MouseConstraint.create(engine.current, {
      element: blockRef.current,
    });
    mouseConstraint.current.mouse.element.removeEventListener("mousewheel", mouseConstraint.current.mouse.mousewheel);
    mouseConstraint.current.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.current.mouse.mousewheel);
    mouseConstraint.current.mouse.element.removeEventListener('touchstart', mouseConstraint.current.mouse.mousedown);
    mouseConstraint.current.mouse.element.removeEventListener('touchmove', mouseConstraint.current.mouse.mousemove);
    mouseConstraint.current.mouse.element.removeEventListener('touchend', mouseConstraint.current.mouse.mouseup);

    mouseConstraint.current.mouse.element.addEventListener('touchstart', mouseConstraint.current.mouse.mousedown, { passive: true });
    mouseConstraint.current.mouse.element.addEventListener('touchmove', (e) => {
  if (mouseConstraint.current.body) {
    mouseConstraint.current.mouse.mousemove(e);
  }
});
mouseConstraint.current.mouse.element.addEventListener('touchend', (e) => {
  if (mouseConstraint.current.body) {
    mouseConstraint.current.mouse.mouseup(e);
  }
});
    bodiesDom.forEach((body, i) => {
      let box = body,
        posX = container.offsetWidth * tags1[i].left + box.offsetWidth / 2,
        posY = container.offsetHeight * tags1[i].top + box.offsetHeight / 2;
        
      boxes.current.push({
        w: box.offsetWidth,
        h: box.offsetHeight,
        elem: box,
        body: Bodies.rectangle(posX, posY, box.offsetWidth, box.offsetHeight, {
          friction: 0,
          frictionAir: 0,
          angle: tags[i].angle,
          chamfer: { radius: borderRadius },
          collisionFilter: {
            category: 1,
          },
        }),

        render() {
          let { x, y } = this.body.position;
          this.elem.style = `transform: translate(${
            x - container.offsetWidth / 2
          }px, ${y - container.offsetHeight / 2}px) rotate(${
            this.body.angle
          }rad);`;
        },
      });

      

      Body.applyForce(
        boxes.current[i].body,
        { x: posX + Math.random() * 100, y: posY + Math.random() * 100 },
        {
          x: getRandomSign() * Math.random() * coef,
          y: getRandomSign() * Math.random() * coef,
        }
      );
      bodies.current.push(boxes.current[i].body);
      let point1 = Bodies.rectangle(posX - box.offsetWidth / 2, posY, 2, 2, {
        isStatic: true,
        collisionFilter: {
          category: 0,
        },
      });
      let point2 = Bodies.rectangle(posX + box.offsetWidth / 2, posY, 2, 2, {
        isStatic: true,
        collisionFilter: {
          category: 0,
        },
      });
      bodies.current.push(point1);
      bodies.current.push(point2);
      let options = {
        bodyA: boxes.current[i].body,
        bodyB: point1,
        pointA: {
          x: -box.offsetWidth / 2,
          y: 0,
        },
        length: constantLength,
        stiffness: 0.00002,
        damping: 0,
      };

      let constraint1 = Constraint.create(options),
        constraint2 = Constraint.create({
          ...options,
          pointA: { ...options.pointA, x: box.offsetWidth / 2 },
          bodyB: point2,
        });
      bodies.current.push(constraint1);
      bodies.current.push(constraint2);
    });

    Composite.add(engine.current.world, [
      ...bodies.current,
      mouseConstraint.current,
      Bodies.rectangle(
        containerW / 2,
        containerH + wallOffset,
        containerW + wallWidth * 2,
        wallWidth,
        wallopts
      ),
      // walls
      Bodies.rectangle(
        containerW / 2,
        -wallOffset,
        containerW + wallWidth * 2,
        wallWidth,
        wallopts
      ), // top
      Bodies.rectangle(
        containerW + wallOffset,
        containerH / 2,
        wallWidth,
        containerH,
        wallopts
      ), // right
      Bodies.rectangle(
        -wallOffset,
        containerH / 2,
        wallWidth,
        containerH,
        wallopts
      ),
      //00000000000000000
      Bodies.rectangle(
        0,
        0,
        wallWidth/2,
        wallWidth * 2,
        wallAngleOpts
      ),
      // walls
      Bodies.rectangle(
        containerW,
        0,
        wallWidth/2,
        wallWidth * 2,
        {...wallAngleOpts, angle: -wallAngleOpts.angle}
      ), // top
      Bodies.rectangle(
        containerW,
        containerH,
        wallWidth/2,
        wallWidth * 2,
        wallAngleOpts
      ), // right
      Bodies.rectangle(
        0,
        containerH,
        wallWidth/2,
        wallWidth * 2,
        {...wallAngleOpts, angle: -wallAngleOpts.angle}
      ),
    ]);
    engine.current.gravity.y = 0;

    Events.on(mouseConstraint.current, "startdrag", (event) => {
      let index = bodies.current.indexOf(event.body);
      removeConstranits(index);
    });
    
  };
  function rerender() {
    boxes.current.forEach((box) => {
      box.render();
    });
    for (let i = 0; i < boxes.current.length - 1; i++)
      for (let j = i + 1; j < boxes.current.length; j++) {
        let bodyA = boxes.current[i].body,
          bodyB = boxes.current[j].body;
        let col = Collision.collides(bodyA, bodyB);
        let k = i * 5,
          l = j * 5;
        if (col) {
          removeConstranits(k);
          removeConstranits(l);
        }
      }
    Engine.update(engine.current);
    requestAnimationFrame(rerender);
  };
  useEffect(() => {
    initWorld();
    let id = requestAnimationFrame(rerender)
    
    window.addEventListener("resize", resizeThrottler);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resizeThrottler);
    };
  }, []);
  return (
    <div className={styles.container} ref={blockRef}>
      {tags.map((tag, i) => (
        <div className={`${styles.box} inter3442`} id={"box" + i} key={i}>
          {tag.text}
        </div>
      ))}
      <Icon name="BBlistLogo" className={styles.logo} />
        <div className={`${styles.title} inter112124`}>{titlePart1}</div>
      <div className={`${styles.title} inter112124`}>{titlePart2}</div>
    </div>
  );
};
