const $ = require('jquery');
let sayHello = (name) => {
    return `Hello, ${name}!`
};

console.log(sayHello('Dylan'));

// function toggler() {
    $("#hl-toggle").children().click(function() {
        if (this.getAttribute('style') == 'background-color:yellow;')
            this.setAttribute('style', '');
        else
            this.setAttribute('style', 'background-color:yellow;');
    });


// }