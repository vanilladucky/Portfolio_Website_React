import pytorch from './images/PyTorch_logo.png';
import scikit from './images/scikit_learn_logo.png';
import pandas from './images/pandas_logo.png';
import react from './images/react_logo.png';
import numpy from './images/numpy.png';
import node_js from './images/node_js.png';
import django from './images/django.png';

export default function TechStack() {
    return (
        <section id = 'tech-stack'>
            <h3>Tech Stack</h3>
            <section id = 'tech-stack-visual'>
            <div id = 'web-dev'>
                <h4>Web Development</h4>
                <div id = "web-dev-stack">
                    <img src={react} alt="React" />
                    <img src={node_js} alt="Node.js" />
                    <img src={django} alt="Django" />
                </div>
            </div>
            <div id = 'deep-learning'>
                <h4>Machine Learning</h4>
                <div id = "deep-learning-stack">
                    <img src={pytorch} alt="PyTorch" />
                    <img src={scikit} alt="Scikit-learn" />
                    <img src={pandas} alt="Pandas" />
                    <img src={numpy} alt="Numpy" />
                </div>
            </div>
            </section>
        </section>
    )
}