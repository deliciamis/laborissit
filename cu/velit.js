var doc = document.implementation.createHTMLDocument("");
var elem = domCreate(doc, "div", null);
elem.textContent = "Hello, World!";
doc.body.appendChild(elem);
