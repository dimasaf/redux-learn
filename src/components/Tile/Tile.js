import React from 'react';
import {string, number} from 'prop-types';

import './style.css';

function Tile({color, id, onClick}) {
  return <div className='tile' style={{backgroundColor: color}} onClick={onClick} />;
}

export default Tile;

Tile.defaultProps = {
  color: 'gray',
};

Tile.propTypes = {
  color: string,
  id: number.isRequired,
};
