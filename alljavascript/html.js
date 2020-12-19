// This javascript paints the html

function addTag(tagType, content =""){
    let newTag = document.createElement(tagType);
    if(content != ""){
        newTag.appendChild(document.createTextNode(content));
    }
    return newTag    
}


const b = document.body;
// create header
b.appendChild(addTag('header',));
b.children[1].appendChild(addTag('h1','Javascript Is Fun'));
b.children[1].appendChild(addTag('section','This responsive Website was created entirely using Javascript and minimal HTML'))

// bring in stylesheet
document.head.appendChild(document.createElement('link'))
document.head.children[0].href = 'main.css';
document.head.children[0].rel = 'stylesheet';

// create main
b.appendChild(addTag('main',));
b.children[2].appendChild(addTag('h2','What is Javascript'));
b.children[2].appendChild(addTag('section','Javascript is a powerful high-level, just-in-time compiled and multi-paradigm programming language. With Javascript you can do many things, such as adding an entirely new HTML element'));

b.children[2].appendChild(addTag('ul',''));
b.children[2].children[2].appendChild(addTag('li','Like this'));
b.children[2].children[2].appendChild(addTag('li','Or this'));
b.children[2].children[2].appendChild(addTag('li','Or this one'));

b.children[2].appendChild(addTag('form',''));
b.children[2].children[3].appendChild(addTag('input',''));
b.children[2].children[3].children[0].type = 'text';
b.children[2].children[3].children[0].placeholder = 'Type anything...';
b.children[2].children[3].appendChild(addTag('input',''));
b.children[2].children[3].children[1].type = 'submit';
b.children[2].children[3].children[1].value = 'ADD';

b.children[2].appendChild(addTag('section','Or you can delete HTML element. Try clicking on any of the list item above.'));
b.children[2].appendChild(addTag('h2','You can also change the formatting of HTML elements'));

b.children[2].appendChild(addTag('aside',''));
// add 16 boxes
for (i = 0; i < 16; i++){
    b.children[2].children[6].appendChild(addTag('article',''));
    b.children[2].children[6].children[i].className = 'box';
}
b.children[2].appendChild(addTag('button','colorize'));

b.children[2].appendChild(addTag('h2','With Javascript, you can do almost anything'));
b.children[2].appendChild(addTag('section','Try moving your mouse over the box below'));
b.children[2].appendChild(addTag('div',''));
b.appendChild(addTag('script',''));
b.children[3].src = 'main.js'
b.appendChild(addTag('footer','Copyright © 2020 Daniel Nguyen'))

console.log(document.head.children[0])