import { UiModal } from "../uikit/ui-modal";
import { UiButton } from "../uikit/ui-button";

function GameOverModal({winner,players}) {
  return (
    <UiModal
      width="md"
      isOpen={winner}
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winner}</span>
        </div>
      </UiModal.Body>
      <div className="px-8 py-4 grid grid-cols-2 gap-3 gap-x-36">
        {players}
      </div>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}

export { GameOverModal };
