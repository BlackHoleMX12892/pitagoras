"use client"

import { useEffect, useRef } from "react"
import { SVG, Svg } from "@svgdotjs/svg.js"
import "@svgdotjs/svg.draggable.js"
import "@svgdotjs/svg.panzoom.js"

const draw = SVG()
let canvas: Svg | null = null;

function render() {
    if (canvas) {
        canvas.viewbox(0, 0, 300, 200)
        canvas.panZoom()
    }
    const pattern = draw.pattern(20, 20, function(add) {
        add.path('M 20 0 L 0 0 0 20')
            .fill('none')
            .stroke({ color: '#ddd', width: 1 });
    });
    draw.rect('100%', '100%').fill(pattern);
    const square = draw.group()
    square.rect(140, 140).fill('#F3EEFF').rotate(45).stroke({ color: '#8E6CF0', width: 1})
    square.text('c²').move(50, 72).fill('#8E6CF0').font({ size: 60, family: 'Helvetica'})
    square.move(0, -100)
    const square2 = draw.group()
    square2.rect(100, 100).fill('#E6F9ED').stroke({ color: '#34C759', width: 1 })
    square2.text('b²').move(35, 47).fill('#34C759').font({ size: 40, family: 'Helvetica'})
    square2.move(0, 100)
    const square3 = draw.group()
    square3.rect(100, 100).fill('#EAF2FF').stroke({ color: '#4F7DF3', width: 1 })
    square3.text('a²').move(35, 47).fill('#4F7DF3').font({ size: 40, family: 'Helvetica'})
    square3.move(-100, 0)
    const triangle = draw.group()
    triangle.polygon('0,100 0,0 100,100').fill('#F3EEFF')
    triangle.path('M 20 100 L 20 80 0 80').fill('none').stroke({ color: '#6B7280', width: 1 })
    triangle.circle(10).fill('#4F7DF3').move(-5, 95).draggable()
    triangle.circle(10).fill('#4F7DF3').move(-5, -5).draggable()
    triangle.circle(10).fill('#4F7DF3').move(95, 95).draggable()
}

function clean() {
    draw.clear()
}

export function reset() {
    clean()
    render()
}

export default function InteractiveMenu() { 
    const interactivemenu = useRef(null);

    useEffect(() => {
        //@ts-expect-error It works and I'm okay with it not being a string.
        canvas = draw.addTo(interactivemenu.current).size('100%', '100%')
        render()
    }, []);
    return(
        <div ref={interactivemenu} className="w-full h-[60%]"></div>
    )
}
