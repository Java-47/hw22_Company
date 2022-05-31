function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}

function createFullInfo(ID, fullname, age, salary, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(`ID - ${ID}, Full Name -  ${fullname}, Age - ${age}, Salary -  ${salary}`);
    element.appendChild(text);
    return element;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}