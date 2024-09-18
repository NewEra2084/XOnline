import { GameLayout } from "./ui/gameLayout";
import { BackLink } from "./ui/backLink";
import { GameInfo } from "./ui/gameInfo";
import { GameTitle } from "./ui/gameTitle";

function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      gameInfo={<GameInfo canRating playersCount={4}/>}
      gameTitle={<GameTitle />}
    />
  );
}

export { Game };
