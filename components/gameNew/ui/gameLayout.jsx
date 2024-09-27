function GameLayout({
  backLink,
  gameTitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  gameCells,
  actions
}) {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 gap-x-36"
        }
      >
        {playersList}
      </div>
      <div
        className={" flex flex-col mt-6 bg-white rounded-2xl shadow-md px-8  pt-5 pb-7"}
      >
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-5 mx-[auto]">
          {gameCells}
        </div>
      </div>
    </div>
  );
}

export { GameLayout };
