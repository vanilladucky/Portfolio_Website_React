import './App.css';
import Typewriter from 'typewriter-effect';

export default function Welcome() {
    return (
    <section id='welcome-section'>
        <div class='welcome-section-header'>
        <Typewriter onInit = {(typewriter) => {
            typewriter.typeString("Hi, I'm Kim").start().pauseFor(500).deleteChars(3).pauseFor(500).typeString("Kim Hyun Bin");
        }}/>
        </div>
        <p>curious,</p>
        <p>ambitious,</p>
        <p>enthusiastic,</p>
        <p>coffee addicted,</p>
        <p>computer science student</p>        
    </section>
    )    
}