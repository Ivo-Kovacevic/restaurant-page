import Pizza from './pizza.png'

function home() {
    const content = document.querySelector('.content');

    const picture = document.createElement('div');
    picture.classList.add('picture');

    const image = document.createElement('img');
    image.src = Pizza;


    const text = document.createElement('div');
    text.classList.add('text');

    const title1 = document.createElement('h1');
    title1.textContent = 'WE MAKE PIZZA!';
    const title2 = document.createElement('h1');
    title2.textContent = 'DONT LOOK ANY FURTHER!';

    picture.append(image);
    text.append(title1, title2);

    content.append(picture, text);
}

export default home;