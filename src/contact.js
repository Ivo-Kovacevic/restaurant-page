
function contact() {
    const content = document.querySelector('.content');
    
    const text = document.createElement('div');
    text.classList.add('text');

    const title1 = document.createElement('h1');
    title1.textContent = 'DO NOT CONTACT US!';
    const title2 = document.createElement('h1');
    title2.textContent = ' WE WILL CONTACT YOU!';

    text.append(title1, title2);

    content.append(text);
}

export default contact;