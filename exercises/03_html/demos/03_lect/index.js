
const htmlTags = require('html-tags');
const htmlElementAttributes = require('html-element-attributes')
const voidHtmlTags = require('html-tags/void');
const HTMLParser = require('node-html-parser');
const path = require('path')
const fs = require('fs');


// https://www.tutorialspoint.com/html5/html5_new_tags.htm
const HTML5 = [ "article", "aside", "audio", "canvas", "command", "datalist", "details", "embed", "figure", "footer", "header", "hgroup",
    "keygen", "mark", "meter", "nav", "output", "progress", "ruby", "section", "time", "video", "wbr" ];

// input types
const types =["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range",
"reset", "search", "submit", "tel", "text", "time", "url",  "week"];

// HTML5 subset of input types
const HTML5types = ["color", "date", "datetime-local", "datetime", "email", "month", "number", "range", "search", "tel", "time", "url", "week" ];


const templateDoc = fs.readFileSync(path.resolve(__dirname, 'index.html'))
        .toString('utf8');
let document = HTMLParser.parse(templateDoc);
let table = document.querySelector("#tags");

htmlTags.forEach(tag => {
    const attr = tag in htmlElementAttributes ? 
        htmlElementAttributes[tag].join(", ") : "";
    if (tag !== "input") {
        const rowString = `<tr>
        <td>${tag}</td>
        <td>${HTML5.includes(tag) ? "X" : ""}</td>
        <td>${(voidHtmlTags.includes(tag)) ? "X" : ""}</td>
        <td>${attr}</td>
        <td><label for="${tag}"></label>
        <${tag} id="${tag}">Example(${tag})</${tag}></td></tr>\n`;
        
        table.appendChild(HTMLParser.parse(rowString));
        return;
    }
    //input, different types
    types.forEach((type, index) => {
        const rowString = `<tr><td class="name">${tag}</td><td>${HTML5types.includes(type) ? "attr" : ""}</td><td>${voidHtmlTags.includes(tag) ? "X" : ""}</td><td class="attr">${index == 0 ? attr : ""}</td><td class="ex"><label for="${tag}"></label><${tag} id="${tag}" type="${type}">input[type="${type}"]</${tag}></td></tr>\n`;
        table.appendChild(HTMLParser.parse(rowString));
    });
});

console.log(document.toString());

