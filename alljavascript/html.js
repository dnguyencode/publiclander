// This javascript paints the html

function addTag(tagType, content){
    let newTag = document.createElement(tagType);
    newTag.appendChild(document.createTextNode(content));
}

addItem