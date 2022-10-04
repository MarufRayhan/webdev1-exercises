

const actorGap = 80;            //this far the vertical lines are
const arrowGap = 10;
const marginVLineW = 20;
const marginVLineH = 20;


let draw;                       //to be set in drawAll

const setCanvas = (canvas) =>{draw=canvas;}

/**
 *  The function returns a canvas object for testing in node.
 * @return 
 */
const getCanvasInNode = () => {
    const { createSVGWindow } = require('svgdom')
    const window = createSVGWindow();
    const document = window.document;
    const { SVG, registerWindow} = require('@svgdotjs/svg.js');

    // register window and document
    registerWindow(window, document);

    // create svg canvas
    return SVG(document.documentElement);
}


const getCanvasInBrowser = () => {
    const width = 600;
    const height = 300;
    return SVG("#svg").viewbox(0, 0, width, height);
}

/**
 * Actors are the titles for vertical lines
 * @param {*} actors 
 */
const drawActors = (actors) => {
    const len = actors.length;
    actors.forEach((actor, index)=>{
        drawActor(actor, index, len);
    });
}


const drawActor = ( actor, i, len) => {
    // actors as a text
    const elem = draw.text(actor);
    elem.move(i * actorGap, 0);

    // vertical lines
    const start = [i * actorGap + marginVLineW, marginVLineH]
    const end = [i * actorGap + marginVLineW, len * arrowGap * 2 + marginVLineH]
    let vline = draw.line(...start, ...end).stroke({ width: 1, color: "black" });
}

/**
 * Draws one arrow, normal arrow to the right, dash arrow to the left
 * @param {*} i the index of the arrow to be drawn
 * @param {*} timeout if negative, no timeout will be applied
 * @param {*} len, the length of actor arr
 */
function drawArrow (i, timeout, len) {
 
    const start = i < len ? [(i * actorGap) + marginVLineW, (i + 2) * arrowGap + arrowGap] : [((len - i + 4) * actorGap) + marginVLineW, (i + 3) * arrowGap]
    const end = i < len ? [((i + 1) * actorGap) + marginVLineW, (i + 3) * arrowGap] : [((len - i + 3) * actorGap) + marginVLineW, (i + 3) * arrowGap]
    let hline = draw.line(...start, ...start).stroke({ width: 1, color: "black" });
    // dash arrow to opposite direction
    if (i >= len) hline.stroke({ dasharray: "5" })
    if (timeout>=0) hline.animate(timeout).plot(...start, ...end);
    else hline.plot(...start, ...end);
    hline.attr('marker-end', 'url(#arrowhead)');
}

exports.drawActors = drawActors;
exports.drawArrow = drawArrow;
exports.getCanvasInNode = getCanvasInNode;
exports.setCanvas = setCanvas;