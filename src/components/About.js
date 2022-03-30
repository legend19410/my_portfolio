import React from 'react'
// import './styles/About.css';
import styles from './styles/About.module.css'
import pdf from '../milton_resume.pdf'

function About() {
  return (
    <section className={styles.about} id="about">

    <h1 className='heading'> about <span> me </span> </h1>
    
    {/* <h1 className='heading'> <span> my </span> skills </h1> */}
    
    <div className={styles.row2}>
    
        <div className={styles.skills}>
                 <div className={styles.box}>
                     <p>
                     I am mostly proficient in react js, html and css for the frontend and sping boot, flask and mysql for the backend. 
                     Moveover, I am equally passionate about both backend and frontend development.
                      Most tools or tech that I have learnt, I try to implement in various projects. 
                      Hence, <a style={{textDecoration:"underline"}} href='#portfolio'>check out my projects</a>  to see what I have done.
                     </p>
                    <p> <span className={styles.attribute}> age : </span> <span className={styles.value}>25</span> </p>
                    <p> <span className={styles.attribute}> gender : </span> <span className={styles.value}>male</span> </p>
                    <p> <span className={styles.attribute}> language : </span> <span className={styles.value}>english</span>  </p>
                    <p> <span className={styles.attribute}> work : </span> <span className={styles.value}>Fullstack developer</span>  </p>
                    <p> <span className={styles.attribute}> freelance : </span> <span className={styles.value}>available</span>  </p>
                    <p> <span className={styles.attribute}> phone : </span> <span className={styles.value}>+1 (876) 895-8478</span>  </p>
                    <p> <span className={styles.attribute}> email : </span> <span className={styles.value}> francismilton19410@gmail.com</span> </p>
                    <p> <span className={styles.attribute}> Degree : </span> <span className={styles.value}>Electronics & Computer Science, BSc (Hons.)</span> </p>
                    <p> <span className={styles.attribute}> class of honours : </span> <span className={styles.value}>First Class Honours</span> </p>
                    <p> <span className={styles.attribute}> University : </span> <span className={styles.value}>UWI, Mona</span> </p>
                </div>
                
              
        </div>
    
        <div className={styles.boxContainer}>
            
        <div className={styles.skills}>
                <div className={styles.progress}>
                    <h3> react js <span> 85% </span> </h3>
                    <div className={styles.bar}> <span className={styles.reactBar}></span> </div>
                </div>
                <div className={styles.progress}>
                    <h3> MySQL <span> 80% </span> </h3>
                    <div className={styles.bar}> <span className={styles.mysqlBar}></span> </div>
                </div>
                <div className={styles.progress}>
                    <h3> PHP <span> 70% </span> </h3>
                <div className={styles.bar}> <span className={styles.phpBar}></span> </div>
                </div>
                <div className={styles.progress}>
                    <h3> C and C++ <span> 60% </span> </h3>
                    <div className={styles.bar}> <span className={styles.cBar}></span> </div>
                </div>
            <div className={styles.progress}>
                <h3> Python <span> 95% </span> </h3>
                <div className={styles.bar}> <span className={styles.pyBar}></span> </div>
            </div>
            <div className={styles.progress}>
                <h3> Java <span> 85% </span> </h3>
                <div className={styles.bar}> <span className={styles.javaBar}></span> </div>
            </div>
            <div className={styles.progress}>
                <h3> OOP <span> 90% </span> </h3>
                <div className={styles.bar}> <span className={styles.oopBar}></span> </div>
            </div>
            <div className={styles.progress}>
                <h3> Spring Boot <span> 85% </span> </h3>
                <div className={styles.bar}> <span className={styles.springBar}></span> </div>
            </div>
            <div className={styles.progress}>
                <h3> JavaScript <span> 85% </span> </h3>
                <div className={styles.bar}> <span className={styles.jsBar}></span> </div>
            </div>
            <div className={styles.progress}>
                <h3> Flask<span> 80% </span> </h3>
                <div className={styles.bar}> <span className={styles.flaskBar}></span> </div>
            </div>
            <div className={styles.progress}>
                <h3> css & html <span> 90% </span> </h3>
                <div className={styles.bar}> <span className={styles.htmlCssBar}></span> </div>
            </div>
            
        </div>
                
        </div>
         
    </div>
            <a href={pdf} className='btn' download>Download</a>
    </section>
  )
}

export default About