// grab UI elements
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('.counter');

textArea.addEventListener('keyup', () => {
    // grab text length
    const textLength = textArea.value.length;
    counter.innerHTML = textLength;
})