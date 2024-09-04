import { Cross } from "./icons/cross";
import { Circle } from "./icons/circle";
import { Triangle } from "./icons/triangle";
import { Square } from "./icons/square";
import { GAME_SYMBOLS } from "./constants";

function GameSymbol({symbol, className}) {
  const Icon = {
    [GAME_SYMBOLS.CROSS]: Cross,
    [GAME_SYMBOLS.CIRCLE]: Circle,
    [GAME_SYMBOLS.TRIANGLE]: Triangle,
    [GAME_SYMBOLS.SQUARE]: Square
  }[symbol] ?? Cross;
  
  return <Icon className={className}/>;
}

export {GameSymbol};