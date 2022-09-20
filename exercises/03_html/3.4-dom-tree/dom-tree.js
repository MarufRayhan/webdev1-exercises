// 1
const element = document.getElementsByClassName('navi')[0]
element.classList.add('list');
// console.log(element)

// 2
const a = document.createElement('a');
var linkText = document.createTextNode("Localhost");
a.appendChild(linkText);
a.setAttribute('href',"http://localhost:3000/");
const newLi = document.createElement("li") 
newLi.appendChild(a)
element.appendChild(newLi)
// console.log(element)

// 3
const newNode = document.createElement('li'),
text = document.createTextNode('Item 0');
newNode.appendChild(text);
const list = document.getElementById('ordered');
list.insertBefore(newNode, list.children[0]);
// console.log(list)

// 4
const removeClass = document.getElementById('todo')
// console.log(removeClass)
removeClass.classList.remove("navi")
// console.log(removeClass)

// 5
var ulElem = document.getElementById('todo');

ulElem.removeChild(ulElem.childNodes[3])
// console.log(ulElem)