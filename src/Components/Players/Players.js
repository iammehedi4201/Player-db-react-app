import React from "react";
import usePlayers from "../Hooks/usePlayers";

import Row from "react-bootstrap/Row";

import "./Players.css";
import Player from "../Player/Player";

const Players = ({inputValue}) => {


    console.log("The input value is:",inputValue);

  const [players, setPlayers] = usePlayers(inputValue);

  console.log("The Player is:", players);

  return (
    <div className="players-section">
      <section className="players-container">
        <Row className="row-sizing mt-4 g-4" xs={1} md={3}>
             
             {
                players.map(player=><Player
                 key={player.idPlayer}
                 player={player}
                ></Player>)
             }

        </Row>
      </section>
    </div>
  );
};

export default Players;
