import TechStack from './Techstack';
import Languages from './Languages';

export default function Intro() {
    return (
    <section id="introduction-background">
        <section id="introduction">
          <h3>I'm currently a second year student studying at 
          Nanyang Technological University in Singapore.
          </h3>
          <p>
            I study Computer Science with a second major in Business Administration.
          </p>
          <p>
            I am deeply passionate and interested in the field of Artificial Intelligence and Deep Learning. It started off with simple interest in mathematics which led to the intersection of math and computer science, 
            which was AI. 
            <br></br>
            <br></br>
            Now I keep up with the latest innovation in the field and attempt to read and replicate research papers whenever I can. Furthermore, I am active on Kaggle, publishing notebooks regularly to 
            talk about machine learning concepts or produce a starter notebook to guide beginners in this complex field. 
            <br></br>
            <br></br>
            My interest lies in the field of GANs, Computer Vision and Sequential Problems such as Natural Language Processing.
          </p>
          <p>
            Additionally, I am diving into the field of Web Development, starting
            from the fundamentals. Harnessing the power of websites with 
            lines of code simply amazes me.
          </p>
        </section>
        <Languages/>
        <TechStack/>        
    </section>
    )
}

