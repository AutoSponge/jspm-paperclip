import paperclip from 'paperclip';

var template = paperclip.template(`
<div onClick="{{ active = !active }}">
    {{ active ? 'hide' : 'show' }}
    <show when="{{ active }}">
    <ul>
        <li><a href="#" onClick="{{ alert('link1') }}">link1</a></li>
    </ul>
    </show>
</div>
`);

var view = template.view({active: false});
document.body.appendChild(view.render());