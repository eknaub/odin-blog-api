import { DebugElement } from '@angular/core';

export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 },
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(
  el: DebugElement | HTMLElement,
  eventObj: unknown = ButtonClickEvents.left
): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
