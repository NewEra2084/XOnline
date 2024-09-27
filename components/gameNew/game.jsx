import { GameLayout } from "./ui/gameLayout";
import { BackLink } from "./ui/backLink";
import { GameInfo } from "./ui/gameInfo";
import { GameTitle } from "./ui/gameTitle";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/playerInfo";
import { GameMoveInfo } from "./ui/gameMoveInfo";
import { GameCell } from "./ui/gameCell";
import { Actions } from "./ui/actions";
import { GameOverModal } from "./gameOverModal";
import { computeWinner, getNextMove } from "./logic/model";
import { useReducer } from "react";
import { GAME_STATE_ACTIONS, gameStateReducer, initGameStateReducer } from "./logic/gameStateReducer";
import { computeWinnerSymbol } from "./logic/computeWinnerSymbol";

const PLAYERS_COUNT = 2;
const renderPlayers = PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
  return (
    <PlayerInfo
      key={player.id}
      rating={player.rating}
      avatar={player.avatar}
      name={player.name}
      symbol={player.symbol}
      isRight={index % 2 === 1}
      seconds={60}
    />
  );
});

function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {playersCount: PLAYERS_COUNT},
    initGameStateReducer
  );

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState.currentMove, PLAYERS_COUNT);
  const winnerSymbol = computeWinnerSymbol(gameState, {winnerSequence, nextMove})

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gameInfo={<GameInfo canRating playersCount={4} />}
        gameTitle={<GameTitle />}
        playersList={renderPlayers}
        gameMoveInfo={
          <GameMoveInfo currentMove={gameState.currentMove} nextMove={nextMove} />
        }
        gameCells={gameState.cells.map((cell, index) => {
          return (
            <GameCell
              key={index}
              isWinner={winnerSequence?.includes(index)}
              disabled={!!winnerSymbol}
              onClick={() => {
                dispatch({ type:GAME_STATE_ACTIONS.CELL_CLICKd, index });
              }}
              symbol={cell}
            />
          );
        })}
        actions={<Actions />}
      />

      <GameOverModal winner={winnerPlayer?.name} players={renderPlayers} />
    </>
  );
}

export { Game };
