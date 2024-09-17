function updateStatus(method, message) {
    const statusBox = document.getElementById('status');
    statusBox.textContent = `Status: ${message}, Method: ${method}`;
}

function addItem(method) {
    updateStatus(method, 'Item added');
}


function callMethod() {
    addItem.call(null, 'call');
}

function applyMethod() {
    addItem.apply(null, ['apply']);
}

function bindMethod() {
    const bindedFunction = addItem.bind(null, 'bind');
    bindedFunction();
}


document.getElementById('callButton').addEventListener('click', callMethod);
document.getElementById('applyButton').addEventListener('click', applyMethod);
document.getElementById('bindButton').addEventListener('click', bindMethod);
document.getElementById('submitButton').addEventListener('click', () => {
    alert('Submitted');
});