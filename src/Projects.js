export default function Projects() {
    return (
    <section id='projects'>
        <h2 class='projects-section-header'>My Projects</h2>
        <div class='project-tile'>
          <a href="https://github.com/vanilladucky/simplysklearn" target='_blank' class='project'> 
          <img src="https://vectorseek.com/wp-content/uploads/2023/02/Scikit-learn-Logo-Vector.jpg" alt = "scikit-learn logo" loading='lazy'/>
          <p id='semi-title'>simplysklearn</p> 
          <p>Python package to automate machine learning process to showcase metric values for nearly all Scikit-Learn's models</p>
          </a>

          <a href="https://github.com/vanilladucky/PyTorch_Guide" target='_blank' class='project'> 
          <img src="https://external-preview.redd.it/pytorch-2-0-released-v0-AOO-W-0wH9-gVmVZfqTZzYzrYLawr2I0pntQzUTRsek.jpg?width=640&crop=smart&auto=webp&s=c639c28fc8b3c5309a93f861973884acb634d9f7" alt = "pytorch logo" loading='lazy'/>
          <p id='semi-title'>PyTorch Guide</p> 
          <p>Guide and Example Projects using PyTorch [Mac/MPS Backend]</p>
          </a>

          <a href="https://www.kaggle.com/kimmik123" target='_blank' class='project'>  
          <img src="https://static-00.iconduck.com/assets.00/kaggle-icon-512x512-ubnqei0x.png" alt = "kaggle logo" loading='lazy'/>
          <p id='semi-title'>Notebooks & Discussion Expert on Kaggle</p> 
          </a>

          <a href="https://github.com/vanilladucky/Self-Driving-Car" target='_blank' class='project'>  
          <img src="https://www.kbb.com/wp-content/uploads/2021/07/Self-driving-autonomous-car.jpeg" alt = "self-driving car" loading='lazy'/>
          <p id='semi-title'>Self driving car using NeuroEvolution of Augmenting Topologies (NEAT)</p> 
          </a>

        </div>

        <div class='projectbtn'>
          <a href='https://github.com/vanilladucky'target='_blank' >
          Other projects
          </a>
        </div>

    </section>
    )
}