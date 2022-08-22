import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useLocation } from "react-router-dom";
import { clicables } from "../../constants/clickables";

function mouseup(x = 0, y = 0) {
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x, y);
    ev.initMouseEvent(
        "mouseup",
        true /* bubble */,
        true /* cancelable */,
        window,
        null,
        x,
        y,
        0,
        0 /* coordinates */,
        false,
        false,
        false,
        false /* modifier keys */,
        0 /*left*/,
        null
    );
    el.dispatchEvent(ev);
}

const Cursor = () => {
    const location = useLocation();

    useEffect(() => {
        mouseup();
    }, [location]);

    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={40}
            color="0, 0, 0"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={1.5}
            clickables={clicables}
        />
    );
};

export default Cursor;
