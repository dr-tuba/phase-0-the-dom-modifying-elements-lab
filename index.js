const body = document.getElementsByTagName('body')[0];
body.removeChild(body.querySelector('main'));

const newHeader = document.createElement('h1');

document.body.appendChild(newHeader);

newHeader.id = 'victory';

newHeader.innerHTML = '<h1>YOUR-NAME is the champion</h1>';