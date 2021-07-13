import React from 'react';
import AddTileButton from '../AddTileButton/AddTileButton';
import Tile from '../Tile/Tile';

import {useSelector, useDispatch} from 'react-redux';

import {addTile, removeTile, addTleWithFunction} from '../../features/Grid/action';

const colors = ['red', 'blue', 'pink', 'yellow', 'gray', 'green'];

function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();

  return (
    <div>
      <div style={{maxWidth: 400, overflow: 'hidden'}}>
        {gridTiles.map((tile, index) => {
          return <Tile {...tile} key={index} onClick={(_) => dispatch(removeTile(tile.id))} />;
        })}
      </div>

      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={(_) => dispatch(addTleWithFunction(color))}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
