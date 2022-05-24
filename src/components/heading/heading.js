import './heading.scss';

class Heading {
    headlineCssClass = 'headline-text'
    render() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Headline';
        h1.classList.add(this.headlineCssClass);
        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}

export default Heading;