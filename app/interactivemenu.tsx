"use client"

import React, { useEffect, useRef } from "react"
import { SVG } from "@svgdotjs/svg.js"
import "@svgdotjs/svg.draggable.js"

export default function InteractiveMenu() { 
    const interactivemenu = useRef(null);

    useEffect(() => {
        //@ts-expect-error it works
        const draw = SVG().addTo(interactivemenu.current).size('100%', 300)
        const pattern = draw.pattern(20, 20, function(add) {
            add.rect(20, 20).fill('#fff');
            add.path('M 20 0 L 0 0 0 20').fill('none').stroke({ width: 0.5, color: '#ccc' });
        });
        draw.rect('100%', '100%').fill(pattern);
        const circle = draw.circle(20).attr({ fill: '#4F7DF3' }).draggable()
        circle.animate(100).move(150, 150);
        const line = draw.line(20, 100, 20, 150).draggable()
        line.stroke({ color: '#000', width: 5});
    }, []);
    return(
        <div ref={interactivemenu}></div>
    )
}
