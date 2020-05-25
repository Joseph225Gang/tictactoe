import React, { useState}  from 'react';
import {turn,grids,gameMark,gameFinalWord} from './Grid';
import { isTheCurrentPlayerOne, isTheCurrentPlayerTwo, isPlayerWin, reachFinalTurnNoOneWin} from './Winner'


const GridItem = (props) => {
    let myTurnStyle = {
        color: 'red'
    };

    let myRivalTurnStyle = {
        color: 'blue'
    };

    let [mark, setMark] = useState('');
    let [status, setStatus] = useState(false);

    const handleClick = () => {
        if(isPlayerWin(isTheCurrentPlayerOne) || isPlayerWin(isTheCurrentPlayerTwo) || reachFinalTurnNoOneWin())
            return;

        if(status === false)
        {
            const footId = 'gameMessage';
            setStatus(true);
            if(turn.length % 2 === 0)
            {
                setMark(gameMark.player1Mark);
                turn.push(gameMark.player1Mark);
            }
            else{
                setMark(gameMark.player2Mark);
                turn.push(gameMark.player2Mark);
            }
            grids[props.id].mark = turn[turn.length - 1];
            
            if(isPlayerWin(isTheCurrentPlayerTwo)){
                alert(gameFinalWord.player2Win);
                document.getElementById(footId).innerHTML = gameFinalWord.player2Win;
            }
            else if(isPlayerWin(isTheCurrentPlayerOne)){
                alert(gameFinalWord.player1Win);
                document.getElementById(footId).innerHTML = gameFinalWord.player1Win;
            }
            else if(reachFinalTurnNoOneWin()){
                alert(gameFinalWord.nobodyWin);
                document.getElementById(footId).innerHTML = gameFinalWord.nobodyWin;
            }
            
        }
    };
  	return (
        <div className="grid-item" style={turn.length % 2 === 0 ? myTurnStyle: myRivalTurnStyle} onClick={handleClick}>
            {mark}
        </div>
    );
  }

export default GridItem;