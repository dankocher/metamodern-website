import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Icon } from "../../../components/Icon";
import {
  Engine,
  Render,
  Composite,
  Bodies,
  World,
  Matter,
  MouseConstraint,
} from "matter-js";

export default ({ title, tags }) => {
  const engine = useRef(Engine.create());
  const boxes = useRef([]);
  const blockRef = useRef(null);
  const mouseConstraint = useRef(null);
  useEffect(() => {
    
    let bodiesDom = document.querySelectorAll(`.${styles.box}`);
    let ceiling, wallLeft, wallRight, ground, disturber;
    let container = blockRef.current;
    
    // add walls
    let wallopts = {
      isStatic: true,
      restitution: 0.8,
      friction: 1,
    };
    
    mouseConstraint.current = MouseConstraint.create(engine.current, {
      element: blockRef.current,
    });
    let i = 0;
    bodiesDom.forEach(body => {
        let box = body;
    
        boxes.current.push({
           w: box.offsetWidth,
           h: box.offsetHeight,
           elem: box,
           body: Bodies.rectangle(200 * i, 200*i, box.offsetWidth*i, box.offsetHeight),
           
           render() {
             const { x, y } = this.body.position;
             this.elem.style.top = `${y - this.h / 2}px`;
             this.elem.style.left = `${x - this.w / 2}px`;
             this.elem.style.transform = `rotate(${this.body.angle}rad)`;
           },
         });
         ++i;
       });
       console.log(boxes.current)
    Composite.add(engine.current.world, [
      ...boxes.current,
      mouseConstraint.current, 
      (ground = Bodies.rectangle(
        container.offsetWidth / 2, container.offsetHeight + 50, container.offsetWidth + 200, 100, wallopts
      )),
      // walls
      (ceiling = Bodies.rectangle(
        container.offsetWidth / 2, -50, container.offsetWidth + 200, 100, wallopts
      )), // top
      (wallRight = Bodies.rectangle(
        container.offsetWidth + 50, container.offsetHeight / 2, 100, container.offsetHeight, wallopts
      )), // right
      (wallLeft = Bodies.rectangle(
        -50, container.offsetHeight / 2, 100, container.offsetHeight, wallopts
      )),
    ]);
    engine.current.gravity.y = 0;
    (function rerender() {
        boxes.current.forEach(box => {
            box.render();
        });
      Engine.update(engine.current);
      requestAnimationFrame(rerender);
    })();
    return ()=>{
      Composite.clear(engine.current.world)
      Engine.clear(engine.current)
      boxes.current = [];
    }
    
  }, []);
  return (
    <div className={styles.container} ref={blockRef}>
      <div className={`${styles.title} inter112124`}>{title}</div>
      {tags.map((tag, i) => (
        <div className={`${styles.box} inter3442`} id={"box" + i}>
          {tag}
        </div>
      ))}
      <div className={styles.ground}></div>
    </div>
  );
};
