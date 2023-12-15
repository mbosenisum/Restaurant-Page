function menuTabSwitch() {
    clearDocument();

    items = document.createElement('div');
    items.textContent = 'bacon, egg, bagel';
    content = document.getElementById('content');
    content.appendChild(items);
}


export {menuTabSwitch};