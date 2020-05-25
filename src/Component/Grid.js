export let grids  = [
    {
      id: 0,
      mark: ''
    },
    {
      id: 1,
      mark: ''
    },
    {
       id: 2,
       mark: ''
    },
    {
       id: 3,
       mark: ''
    },
    {
       id: 4,
       mark: ''
    },
    {
       id: 5,
       mark: ''
    },
    {
       id: 6,
       mark: ''
    },
    {
       id: 7,
       mark: ''
    },
    
    {
        id: 8,
        mark: ''
    },
  ];
export const gameMark = {
    player1Mark : 'X',
    player2Mark : 'O'
};

export const gameFinalWord = {
    player1Win: '玩家1贏了',
    player2Win: '玩家2贏了',
    nobodyWin: '平手'
};
export let turn = [];
export default {grids,turn,gameMark,gameFinalWord};

