import {turn,grids,gameMark} from './Grid';

function calculateWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        const tempGridInfo = [grids[a],grids[b],grids[c]];
        if(isStringEmpty(tempGridInfo) && isWinning(tempGridInfo)) {
            return true;
        }
    }
    return false;
}
 
function isStringEmpty(tempGridInfo)
{
    return tempGridInfo.every(function(item){
            return item.mark !== ''; 
          });
}

function isWinning(tempGridInfo)
{
    const rivalWinning =  tempGridInfo.every(function(item){
                            return item.mark === gameMark.player2Mark; 
                        });
    const iWinning =  tempGridInfo.every(function(item){
                            return item.mark === gameMark.player1Mark; 
                        });
    return rivalWinning || iWinning;
    
}


const isTheGameReachMinTurnToWin = () => turn.length >= 5;

export const isTheCurrentPlayerTwo = () => turn[turn.length - 1] === gameMark.player2Mark;

export const isTheCurrentPlayerOne = () => turn[turn.length - 1] === gameMark.player1Mark;

export const reachFinalTurnNoOneWin = () =>　turn.length === 9

export const isPlayerWin = (isPlayerWin) => calculateWinner() && isPlayerWin() && isTheGameReachMinTurnToWin();

export default {isTheCurrentPlayerOne, isTheCurrentPlayerTwo, isPlayerWin, reachFinalTurnNoOneWin};
