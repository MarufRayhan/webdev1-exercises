
var expect = require('chai').expect;
const draw = require('../../misc/draw');
const async = require('../callback');
const DOMParser = require('dom-parser');



describe('drawActors()', function () {
  let canvas = {};
  const parser = new DOMParser();
  const actors = ["hello", "world"];
  let lines;

  const getActorLines = (actors) =>{
    draw.drawActors(actors);
    const svg = canvas.svg();
    const xmlDoc = parser.parseFromString(svg, "text/xml");
    return xmlDoc.getElementsByTagName("line");
  }
  
  beforeEach(() => {
    // avoid object references and create copies
    canvas = draw.getCanvasInNode();
    draw.setCanvas(canvas);
    lines = getActorLines(actors);
  });


  it('must return texts that match with actors', function () {
    const svg = canvas.svg();
    const xmlDoc = parser.parseFromString(svg, "text/xml");
    const texts = xmlDoc.getElementsByTagName("text");
    
    for (let i = 0; i < texts.length; i++) {
      const children  = texts[i].childNodes[0].childNodes;
      const text = children[0].textContent;
      expect(text).to.equal(actors[i]);
    }
  });


  it('must return two lines', function () {
    const len = lines.length;
    expect(len).to.equal(2);
  });

  it('the two lines must be vertical', function () {
    for (let i = 0; i < lines.length; i++) {
      const x1 = lines[i].getAttribute("x1");
      const x2 = lines[i].getAttribute("x2");
      expect(x1).to.equal(x2)
    }
  });

  it('the stroke must be black', function () {
    for (let i = 0; i < lines.length; i++) {
      const attributes = lines[i].attributes;
      for (let attr of attributes) {
        const stroke = lines[i].getAttribute("stroke");
        expect(stroke).to.equal("black")
      }
    }
  });

  it('the stroke-width must be one', function () {

    for (let i = 0; i < lines.length; i++) {
      const attributes = lines[i].attributes;
      for (let attr of attributes) {
        const w = lines[i].getAttribute("stroke-width");
        expect(w).to.equal("1")
      }
    }
  })

});


describe('drawArrows()', function () {
  let canvas = {};
  const parser = new DOMParser();
  const actors = ["hello", "world"];
  let lines;
  
  const getLines = (actors) =>{
    async.drawArrowsSync(actors, draw.drawArrow);
    const svg = canvas.svg();
    const xmlDoc = parser.parseFromString(svg, "text/xml");
    return xmlDoc.getElementsByTagName("line");
  }
  
  beforeEach(function () {
    // avoid object references and create copies
    canvas = draw.getCanvasInNode();
    draw.setCanvas(canvas);
    lines = getLines(actors);
  });


  it('must return two lines', function () {
    const len = lines.length;
    const res = expect(len).to.equal(2);
  });

  it('the two lines must be horizontal, checked by equality of y:s', function () {

    for (let i = 0; i < lines.length; i++) {

      const y1 = lines[i].getAttribute("y1");
      const y2 = lines[i].getAttribute("y2");

      expect(y1).to.not.equal("undefined");
      expect(y1).to.equal(y2)
    }
  });

  it('the opposite lines must be dashed', function () {

    for (let i = Math.round(lines.length / 2); i < lines.length; i++) {
      const dash = lines[i].getAttribute("stroke-dasharray");
      expect(dash).to.equal("5")

    }
  });

  it('each arrow must have a head', function () {
    lines.forEach(line=>{
      const arrowHead = line.getAttribute("marker-end");
      expect(arrowHead).to.equal("url(#arrowhead)")
    });
  });

});



