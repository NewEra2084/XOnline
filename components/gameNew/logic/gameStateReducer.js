import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./model";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export const gameStateReducer = (state, action) => {
  const {index} = action;
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[index]) {
        return {...state};
      }

      return {
        ...state,
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.playersTimeOver
        ),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentMove : cell
        ),
      };
    }
  }
  return {...state};
};

export const initGameStateReducer = ({playersCount}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount
});