import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Player.css";
import { useNavigate } from "react-router-dom";

const Player = ({player}) => {

    const {idPlayer,strPlayer,strDescriptionEN,strThumb} =player

    const textLimition =strDescriptionEN?.length>100 ? strDescriptionEN.slice(0,101) +"..." : strDescriptionEN ;

   //*Navigate to friends Details

   const navigate =useNavigate()
  
   const navigateToFriendDetails =()=>{

     const path =`/Friend/${idPlayer}`;

     navigate(path);



   }

  return (
    <div className="player-section">
      <Col>
        <Card className="player-card-sizing">
          <Card.Img className="card-img-sizing" variant="top" src={strThumb} />
          <Card.Body>
            <Card.Title>{strPlayer}</Card.Title>
            <Card.Text title={strDescriptionEN}>
                {textLimition == null ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> : textLimition}
            </Card.Text>
          </Card.Body>
          <Button onClick={navigateToFriendDetails} variant="primary">Read {strPlayer} Details</Button>
        </Card>
      </Col>
    </div>
  );
};

export default Player;
