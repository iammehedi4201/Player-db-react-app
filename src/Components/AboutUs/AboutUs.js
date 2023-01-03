import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
     
         <div className="container About-section">
            <h1 className="about_taital">About Us</h1>
            <p className="about_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
            <hr/>
            <div className="about_section_2">
               <div className="row row-sizing-about">
                  <div className="col-lg-6">
                     <div className="about_image">
                        <img className='about-img-sizing' src={require('./img/HD-wallpaper-messi-football-player.jpg')} alt=""/>
                    </div>
                  </div>
                  <div className="col-lg-6 about-details">
                     <div className="about_taital_main">
                        <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                         </p>
                        <a className='btn btn-outline-success' href="#">Read More</a>
                        
                        </div>
                  
                  </div>
               </div>
            </div>
         </div>
    );
};

export default AboutUs;