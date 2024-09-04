import Link from 'next/link';
import { ArrowLeftIco } from './icons/arrowLeftIcon';
import { Star } from './icons/Star';
import { PlayersIcon } from './icons/playersIcon';
import { TimeIcon } from './icons/timeIcon';

function GameTitle({playersCount}) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-teal-800  leading-tight -mb-0.5"
      >
        <ArrowLeftIco></ArrowLeftIco> На главную
      </Link>
      <h1 className="text-[36px]">Крестики нолики</h1>
      <div className="flex gap-3 text-xs text-slate-400 items-center">
        <Star />
        <div className='flex gap-1 items-center'>
          <PlayersIcon /> {playersCount}
        </div>
        <div className='flex gap-1 items-center'>
          <TimeIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
}

export { GameTitle };
