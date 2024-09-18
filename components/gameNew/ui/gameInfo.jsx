import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/histry-icon";

function GameInfo({ playersCount, canRating, timeVariant = "1 мин на ход" }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {canRating && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon /> {timeVariant}
      </div>
    </div>
  );
}

export { GameInfo };
