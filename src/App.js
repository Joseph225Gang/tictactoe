import React from 'react';
import  {grids} from './Component/Grid';
import GridContainer from './Component/GridContainer';
import   FootWord from './Component/FootWord';
import './App.css';


function App() {

  return (
    <div>
      <GridContainer gridItemList={grids}/>
      <FootWord/>
    </div>
  );
}

export default App;
