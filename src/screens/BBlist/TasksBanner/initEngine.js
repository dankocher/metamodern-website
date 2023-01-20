
import {
  Engine,
  Render,
  Composite,
  Bodies,
  World,
  Matter,
  MouseConstraint,
} from "matter-js";
import { useRef } from "react";

export const initEngine = (blockRef, engine, mouseConstraint, boxes, boxClassName,) => {
  
  let bodiesDom = document.querySelectorAll(`.${boxClassName}`);
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
    
    for(let i=0; i < 1; i++){
        let box = bodiesDom[i];
        if(box)
        boxes.current.push({
           w: box.offsetWidth,
           h: box.offsetHeight,
           elem: box,
           body: Bodies.rectangle(200, 200, box.offsetWidth, box.offsetHeight),
           
           render() {
             const { x, y } = this.body.position;
             this.elem.style.top = `${y - this.h / 2}px`;
             this.elem.style.left = `${x - this.w / 2}px`;
             this.elem.style.transform = `rotate(${this.body.angle}rad)`;
           },
         });
         else break;
       }
       console.log(boxes)
    Composite.add(engine.current.world, [
      ...boxes.current,
      mouseConstraint.current, // ground
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
};
