import React from 'react'
// import './styles/Home.css';
import styles from './styles/Home.module.css'

function Home() {
  return (
    <section className={styles.home} id="home">

            <div className={styles.content}>
                <span className={styles.hi}> hello... </span>
                <h3> i am <span> milton Francis </span> </h3>
                <p className={styles.info}> A fullstack software developer </p>
                <p className={styles.text}> 
                        I enjoy writing software solutions to solve complex problems.
                        I am a very fast learner who can learn multiple technoligical tools to complete software projects that I set out to do.
                        I can work pretty well in teams and just as well on my own.
                </p>
                <a href="#about" className='btn'>about me</a>
            </div>

            <div className={styles.image}>
                <img src="images\portfolio_image.jpg" alt=""/>
            </div>

</section>
  )
}

export default Home