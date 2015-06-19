import paperclip from 'paperclip';

var template = paperclip.template("hello {{name}}!");
var view = template.view({ name: "Bill Murray" });
document.body.appendChild(view.render());