import { useEffect, useState } from "react";

const usePlayerDetails = (playerid) => {
  const [PlayerDetails, setPlayerDetails] = useState({});

  useEffect(() => {
    const api = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerid}`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setPlayerDetails(data.players[0]));
  }, [playerid]);

  return [PlayerDetails, setPlayerDetails];
};

export default usePlayerDetails;
