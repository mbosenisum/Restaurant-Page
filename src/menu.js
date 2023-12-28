import { clearDocument } from './clearDocument.js';

export function menuTabSwitch() {
    clearDocument();

    let items = document.createElement('div');
    items.textContent = 'bacon, egg, bagel';
    let content = document.getElementById('content');
    content.appendChild(items);
}


// export { menuTabSwitch };