import React from 'react';
import GridItem from './GridItem';


const GridContainer = (props) => {
    return (
	<div className="grid-container">
  	    {props.gridItemList.map(gridItem => <GridItem key={gridItem.id} {...gridItem}/>)}
	</div>
    )
};


export default GridContainer;
