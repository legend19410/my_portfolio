import React from 'react'
import './styles/Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">

    <h1 className="heading"> <span> my </span> Journey </h1>

    <div className="box-container">

        <div className="box">
            <div className="content">
                <span> 2008 - 2013 </span>
                <h3>High School Diploma CSEC</h3>
                <p>After completing St. Mary High School, I atained a high school diploma
                     and passes in eight (8) CSEC subjects</p>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <span> 2013 - 2015 </span>
                <h3> ASc. Natural Sciences CAPE</h3>
                <p>I obtained a CAPE ASc. in natural sciences after successfully passing eight (8) CAPE subjects.</p>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <span> 2016 - Present </span>
                <h3>law enforcement</h3>
                <p>I went through (8) months of rigorous training at the national police college of jamaica and  began a career working 
                     in multiple aspects of law enforcement.
                </p>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <span> 2018 - 2021 </span>
                <h3>Electronics and Computer science, BSc (Hons.)</h3>
                <p>I underwent three (3) years of fulltime study at the University of the West Indies and
                     atained a BSc. in Electronics & Computer Science with First class honors.
                </p>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <span> 2021 </span>
                <h3>Administrative Support and data Management</h3>
                <p>I performed administrative roles and data management at the Specialized Operations Unit.</p>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <span> 2021 - Present </span>
                <h3>fullstack software development</h3>
                <p>I began learning multiple technological tools and started working on fullstack software applications.</p>
            </div>
        </div>

    </div>

</section>
  )
}

export default Experience