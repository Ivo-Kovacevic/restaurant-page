import './styles.css';
import home from './home'
import location from './location'
import contact from './contact'

home();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => renderContent(button.className)));

const renderContent = (page) => {
    document.querySelector('.content').innerHTML = '';
    switch (page) {
        case 'home':
            home();
            break;
        case 'location':
            location();
            break;
        case 'contact':
            contact();
            break;
        default:
            home();
    }
}