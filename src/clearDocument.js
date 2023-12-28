export function clearDocument() {
    let content = document.getElementById('content');
    content.remove();

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute("id", "content");
    let body = document.getElementsByTagName('body');
    // console.log("body = " + body);
    body[0].appendChild(contentDiv);
    return;
}

// export { clearDocument as clearDocument};