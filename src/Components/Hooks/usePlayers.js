import { useEffect, useState } from "react"

const usePlayers =(playerName)=>{

    console.log("The player name :",playerName);

    const [players,setPlayers] =useState([]);

    useEffect(()=>{

        const api =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`

         fetch(api)
         .then(res=>res.json())
         .then(data=>setPlayers(data.player))

    },[playerName])

    return [players,setPlayers];

}

export default usePlayers;