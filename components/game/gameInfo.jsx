import { Profile } from '../profile';
import { GAME_SYMBOLS } from './constants.js';
import { GameSymbol } from './getSymbol.jsx';
import avatar1 from './avatars/avatar1.png';
import avatar2 from './avatars/avatarBig.png';
import avatar3 from './avatars/avatarSmall.png';
import avatar4 from './avatars/avatarMale.png';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const players = [
  {
    id: 1,
    name: 'Михаил Филиппов',
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
    rating: 1230,
  },
  {
    id: 2,
    name: 'Big efefwefwefewf',
    avatar: avatar2,
    symbol: GAME_SYMBOLS.CIRCLE,
    rating: 830,
  },
  {
    id: 3,
    name: 'Lara',
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
    rating: 10920,
  },
  {
    id: 4,
    name: 'Мужык',
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
    rating: 190909,
  },
];

function GameInfo({ className, playersCount, currentMove, winner, onPlayerTimeOver }) {
  return (
    <div
      className={`${className ? className : ''} grid grid-cols-[1fr_300px] gap-3 bg-white drop-shadow-md py-4 px-8 rounded-xl `}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 == 1}
          isTimerRunning={currentMove === player.symbol && !winner}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(60);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const seconds1 = String(Math.floor(seconds % 60)).padStart(2, '0');
  const closeLose = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return closeLose ? 'text-orange-700' : 'text-slate-900';
    }
    return 'text-slate-300';
  };

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if(seconds === 0) onTimeOver();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className="flex items-center gap-3">
      <div className={clsx('relative', isRight && 'order-3')}>
        <Profile
          name={playerInfo.name}
          avatar={playerInfo.avatar}
          rating={playerInfo.rating}
        />
        <div className="h-5 w-5 absolute -top-1 -left-1 bg-white rounded-full shadow-md flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div
        className={clsx('w-px h-6 bg-slate-400 ', isRight && 'order-2')}
      ></div>{' '}
      <h6
        className={clsx(
          'text-xl font-semibold leading-5 text-center',
          isRight && 'order-1',
          getTimerColor(),
        )}
      >
        {minutes}:{seconds1}
      </h6>
    </div>
  );
}

export { GameInfo };
