import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './HomeDetails.css'

const HomeDetails = () => {
    return (
    <Row className='row-sizing mt-4 g-4' xs={1} md={4} >    
        <Col>
          <Card className='homedetails-card-sizing'>
            <Card.Img className='card-img-sizing' variant="top" src={require("./Img/3ccb17c35710b76159c0400349f1928d.jpg")} />
            <Card.Body>
              <Card.Title>Luiz Suraz</Card.Title>
              <Card.Text>
              Suárez is regarded as one of the best players of his generation and one of the greatest strikers of all time. Suárez has won two European Golden Shoes, an Eredivisie Golden Boot, a Premier League Golden Boot, and the Pichichi Trophy. He has scored over 500 career goals for club and country. Uruguay Olympic (O.P.)
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Read More</Button>
          </Card>
        </Col>

        <Col>
          <Card className='homedetails-card-sizing'>
            <Card.Img  className='card-img-sizing' variant="top" src={require('./Img/5ed2e77f1bf212bcdfc706649d32930d.jpg')} />
            <Card.Body>
              <Card.Title>Leonal Messi</Card.Title>
              <Card.Text>
              Lionel Messi is an Argentine-born football (soccer) player who has been named the world's best men's player of the year six times (2009–12, 2015, and 2019). Naturally left-footed, quick, and precise in control of the ball, Messi is known as a keen pass distributor and can readily thread his way through packed defenses
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Read More</Button>
          </Card>
        </Col>
        <Col>
          <Card className='homedetails-card-sizing'>
            <Card.Img  className='card-img-sizing' variant="top" src={(require('./Img/d66e892396236e13beb7e1a6a267fa87.jpg'))}/>
            <Card.Body>
              <Card.Title>Diago Meradona</Card.Title>
              <Card.Text>
              Diego Maradona, in full Diego Armando Maradona, (born October 30, 1960, Lanus, Buenos Aires, Argentina—died November 25, 2020, Tigre, Buenos Aires), Argentine football (soccer) player who is generally regarded as the top footballer of the 1980s and one of the greatest of all time.
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Read More</Button>
          </Card>
        </Col>
        <Col>
          <Card className='homedetails-card-sizing'>
            <Card.Img className='card-img-sizing' variant="top" src={require('./Img/dd082168e4de15a268b61a763949a7ac.jpg')} />
            <Card.Body>
              <Card.Title>Francesco Totti</Card.Title>
              <Card.Text>
              Francesco Totti Ufficiale OMRI is an Italian former professional footballer who played solely for Roma and the Italy national team. ... "Roma legend Francesco Totti: 40 things to know on his 40th birthday".
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Read More</Button>
          </Card>
        </Col>
    </Row>
    );
};

export default HomeDetails;