import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carouselimg.css'

const Carouselimg = () => {
    return (
        <section className="carosuel-section">
      <Carousel >
        <Carousel.Item>

            <div className='inner-carousel-item'>
            
            <div className='carousel-img-details'>
            <h3>Lionel Messi</h3>
            <p>
            Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards and four European Golden Shoes, the most by a European player. He has won 34 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League.
            </p>
          </div>
          <img
            className="  carousel-img-sizing"
            src={require("./Img/5ed2e77f1bf212bcdfc706649d32930d.jpg")}
            alt="Messi"
          />
            </div>
        
        </Carousel.Item>
        <Carousel.Item>

<div className='inner-carousel-item'>

<div className='carousel-img-details'>
<h3>Luiz Suraz</h3>
<p>
Suárez is regarded as one of the best players of his generation and one of the greatest strikers of all time. Suárez has won two European Golden Shoes, an Eredivisie Golden Boot, a Premier League Golden Boot, and the Pichichi Trophy. He has scored over 500 career goals for club and country. Uruguay Olympic (O.P.)
</p>
</div>
<img
className="  carousel-img-sizing"
src={require("./Img/3ccb17c35710b76159c0400349f1928d.jpg")}
alt="Messi"
/>
</div>

</Carousel.Item>
        <Carousel.Item>

            <div className='inner-carousel-item'>
                
            <img
            className="d-block carousel-img-sizing"
            src={require("./Img/dd082168e4de15a268b61a763949a7ac.jpg")}
            alt="Second slide"
          />
           
            <div className='carousel-img-details'>
            <h3>Francesco Totti</h3>
            <p>
            Totti spent his entire career at Roma, winning a Serie A title, two Coppa Italia titles, and two Supercoppa Italiana titles. He is the second-highest scorer of all time in Italian league history with 250 goals, and is the sixth-highest scoring Italian in all competitions with 316 goals
            </p>
          </div>
         
                
            </div>
       
        </Carousel.Item>
        <Carousel.Item>
           <div className='inner-carousel-item'>
           <img
            className="d-block  carousel-img-sizing"
            src={require("./Img/e5757d95dba570de99a6a9bcb3be6802.jpg")}
            alt="Third slide"
          />

          <div className='carousel-img-details'>
            <h3>Cristinao Randlo</h3>
            <p>
            Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards and four European Golden Shoes, the most by a European player. He has won 34 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League.
            </p>
          </div>
           </div>
         
        </Carousel.Item>
      </Carousel>
    </section>
    );
};

export default Carouselimg;