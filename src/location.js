
function location() {
    const content = document.querySelector('.content');

    const text = document.createElement('div');
    text.classList.add('text');

    const title1 = document.createElement('h1');
    title1.textContent = 'WE ARE EVERYWHERE!';
    const title2 = document.createElement('h1');
    title2.textContent = 'LOOK BEHIND YOU!';

    text.append(title1, title2);

    content.append(text);
}

export default location;