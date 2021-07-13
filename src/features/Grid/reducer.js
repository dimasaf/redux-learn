const INITIAL_STATE = [];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TILE':
      const nextId = state.length + 1;
      const newTile = {
        id: nextId,
        color: action.color,
      };

      return [...state, newTile];

    case 'REMOVE_TILE':
      return state.filter((tile) => tile.id !== action.id);

    default:
      return state;
  }
}

export default reducer;
