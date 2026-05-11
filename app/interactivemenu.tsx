"use client"

import { useEffect, useRef } from "react"
import { SVG, Svg } from "@svgdotjs/svg.js"
import { config } from "./global"
import "@svgdotjs/svg.draggable.js"
import "@svgdotjs/svg.panzoom.js"

const draw = SVG()
let canvas: Svg | null = null;

let a: number;
let b: number;
let c: number;

const defaulta = 60;
const defaultb = 80;

a = defaulta;

b = defaultb;

let asquared = a * a;
let bsquared = b * b;
let csquared = asquared + bsquared;

c = Math.sqrt(csquared);

let inclination = Math.asin(a / c) * (180 / Math.PI);

function calcC() {
    asquared = a * a;
    bsquared = b * b;
    csquared = asquared + bsquared;

    c = Math.sqrt(csquared);

    inclination = Math.asin(a / c) * (180 / Math.PI);
}

let showSquares = config.check;

export function handleShowSquaresCheckbox() {
    showSquares = config.check
    clean()
    render()
}


function render() {
    if (canvas) {
        canvas.viewbox(0, 0, 1100, 400)
        canvas.panZoom()
    }
    const pattern = draw.pattern(20, 20, function(add) {
        add.path('M 20 0 L 0 0 0 20')
            .fill('none')
            .stroke({ color: '#ddd', width: 1 });
    })
    draw.rect('100%', '100%').fill(pattern)
    const triangle = draw.group();
    triangle.polygon([a, 0, (a + b), a, a, a]).fill('#F3EEFF').stroke({ color: '#8E6CF0', width: 1})
    if (showSquares == true) {
        triangle.polygon([0, 0, 0, a, a, a, a, 0]).fill('#EAF2FF').stroke({ color: '#4F7DF3', width: 1 })
        triangle.polygon([a, a, a, (a + b), (a + b), (a + b), (a + b), a]).fill('#E6F9ED').stroke({ color: '#34C759', width: 1 })
    }
    let lastY: number;
    const circle1 = triangle.circle(10).move((a - 5), - 5).fill('#4F7DF3').draggable().on('dragmove.namespace', (e) => {
        //@ts-expect-error I don't understand events sorry
        const { handler, box } = e.detail
        e.preventDefault()

        handler.move(circle1.x(), box.y - (box.y % 20))

        const y = box.y - (box.y % 20)

        if (y > lastY) a -= 20
        if (y < lastY) a += 20

        lastY = y
        calcC()
        clean()
        render()
    })
    let lastX: number;
    const circle2 = triangle.circle(10).move(((a + b) - 5), (a - 5)).fill('#4F7DF3').draggable().on('dragmove.namespace', (e) => {
        //@ts-expect-error I don't understand events sorry
        const { handler, box } = e.detail
        e.preventDefault()

        handler.move(box.x - (box.x % 20), circle2.y())

        const x = box.x - (box.x % 20)

        if (x > lastX) b += 20
        if (x < lastX) b -= 20

        lastX = x
        calcC()
        clean()
        render()
    })
    triangle.move(20, 100)
    const cSquare = draw.group()
    cSquare.rect(c, c).rotate(inclination).fill('#F3EEFF').stroke({ color: '#8E6CF0', width: 1})
    //cSquare.text("C²").fill('#8E6CF0').font({ size: 60, family: 'Helvetica'})
    cSquare.move(700, 100)
    cSquare.draggable()
}

function clean() {
    draw.clear()
}

export function reset() {
    a = defaulta;

    b = defaultb;

    asquared = a * a;
    bsquared = b * b;
    csquared = asquared + bsquared;

    c = Math.sqrt(csquared);

    inclination = Math.asin(a / c) * (180 / Math.PI);

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
