import React from 'react'
import './styles/Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

    <h1 className="heading"> <span> my </span> portfolio </h1>

    <div className="box-container">

        <div className="box">
            <img src="images/marketplace.png" alt=""/>
            <h3> MarketPlace </h3>
            <div className="icons">
                <a href="https://marketplace-estore.herokuapp.com/" className="fas fa-link"></a>
                <a href="#" className="fas fa-info-circle"></a>
                <a href="https://github.com/legend19410/marketplace" className="fab fa-github"></a>
            </div>
        </div>

        <div className="box">
            <img src="images/prms_img.png" alt=""/>
            <h3> JCF Prms </h3>
            <div className="icons">
                <a href="https://jcf-resource-manager.herokuapp.com/" className="fas fa-link"></a>
                <a href="#" className="fas fa-info-circle"></a>
                <a href="https://github.com/legend19410/prmsfrontend" className="fab fa-github"></a>
            </div>
        </div>

        <div className="box">
            <img src="images/groceryscape_img.png" alt=""/>
            <h3> GroceryScape </h3>
            <div className="icons">
                <a href="https://groceryscape.web.app/" className="fas fa-link"></a>
                <a href="#" className="fas fa-info-circle"></a>
                <a href="https://github.com/legend19410/online-grocery-store-restaurant" className="fab fa-github"></a>
            </div>
        </div>

        {/* <div className="box">
            <img src="images/img-4.jpg" alt=""/>
            <h3> project 04 </h3>
            <div className="icons">
                <a href="#" className="fas fa-link"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-search"></a>
            </div>
        </div>

        <div className="box">
            <img src="images/img-5.jpg" alt=""/>
            <h3> project 05 </h3>
            <div className="icons">
                <a href="#" className="fas fa-link"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-search"></a>
            </div>
        </div>

        <div className="box">
            <img src="images/img-6.jpg" alt=""/>
            <h3> project 06 </h3>
            <div className="icons">
                <a href="#" className="fas fa-link"></a>
                <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-search"></a>
            </div>
        </div> */}

    </div>

</section>

  )
}

export default Portfolio