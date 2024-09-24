import { GameLayout } from "./ui/gameLayout";
import { BackLink } from "./ui/backLink";
import { GameInfo } from "./ui/gameInfo";
import { GameTitle } from "./ui/gameTitle";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/playerInfo";

function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      gameInfo={<GameInfo canRating playersCount={4} />}
      gameTitle={<GameTitle />}
      playersList={PLAYERS.map((player, index) => {
        return <PlayerInfo
          key={player.id}
          rating={player.rating}
          avatar={player.avatar}
          name={player.name}
          symbol={player.symbol}
          isRight={index % 2 === 1}
          seconds={60}
        />;
      })}
    />
  );
}

export { Game };
