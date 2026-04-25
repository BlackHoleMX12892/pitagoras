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
        const line = draw.line(20, 50, 20, 235).draggable()
        line.stroke({ color: '#4F7DF3', width: 5});
        const line2 = draw.line(40, 40, 250, 235).draggable()
        line2.stroke({ color: '#8E6CF0', width: 5});
        const line3 = draw.line(40, 250, 240, 250).draggable()
        line3.stroke({ color: '#34C759', width: 5});
        const circle = draw.circle(20).attr({ fill: '#4F7DF3' }).draggable()
        circle.animate(100).move(10, 240);
        const circle2 = draw.circle(20).attr({ fill: '#4F7DF3' }).draggable()
        circle2.animate(100).move(10, 25);
        const circle3 = draw.circle(20).attr({ fill: '#4F7DF3' }).draggable()
        circle3.animate(100).move(250, 240);
    }, []);
    return(
        <div ref={interactivemenu}></div>
    )
}
