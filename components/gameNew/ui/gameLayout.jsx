function GameLayout({ backLink, gameTitle, gameInfo, playersList }) {
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
    </div>
  );
}

export { GameLayout };