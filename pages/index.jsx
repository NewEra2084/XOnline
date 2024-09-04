import { Header } from '../components/header/';
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from '../components/game/';
import { useState } from 'react';
import { GameSymbol } from '../components/game/getSymbol';

export default function HomePage() {
  const [playersCount] = useState(4);

  const { cells, handleCellClick, currentMove, nextMove, winnerSequence, winnerSymbol, handlePlayerTime} = useGameState(
    playersCount
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[50vw]">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          winner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTime}
        />
        <div>{<GameSymbol symbol={winnerSymbol}/>}</div>
        <GameField
          playersCount={playersCount}
          className="w-[50vw] h-max mt-6"
          cells={cells}
          handleCellClick={handleCellClick}
          currentMove={currentMove}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
