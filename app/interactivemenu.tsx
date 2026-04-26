"use client"

import { useEffect, useRef } from "react"
import { SVG, Svg } from "@svgdotjs/svg.js"
import "@svgdotjs/svg.draggable.js"
import "@svgdotjs/svg.panzoom.js"

const draw = SVG()
let canvas: Svg | null = null;

function render() {
    if (canvas) {
        canvas.viewbox(0, 0, 100, 100)
        canvas.panZoom()
    }
    const square = draw.group()
    square.rect(100, 100).fill('#F3EEFF').rotate(45)
    square.text('c²').move(20, 20)
    square.draggable()
    draw.rect(100, 50).fill('#000').draggable()
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
