import { useState } from "react";
import "./Lottery.css"
import {genTicket, sum} from "./helper.js";
import Ticket from "./Ticket.jsx";

function Lottery({n, winningSum}) {
    let [ticket, setTicket]= useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTick = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTick}>Buy new Tickets!</button> 
            <h3 className="score">{isWinning ? "Congratulations, you won" : "You lose. Better luck next time!"}</h3>
  
        </div>
    );
}

export default Lottery;
