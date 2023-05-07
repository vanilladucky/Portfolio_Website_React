import c from './images/c.png'
import css from './images/css.png'
import html from './images/html.png'
import js from './images/js.png'
import python from './images/python.png'
import './css/languages.css';

export default function Languages() {
    return (
        <section id = 'language-stack'>
            <h3>Programming languages</h3>
            <section id = 'language-stack-visual'>
                <img src={python} alt="python" />
                <img src={c} alt="c" />
                <img src={js} alt="js" />
                <img src={html} alt="html" />
                <img src={css} alt="css" />           
            </section>
        </section>
    )
}