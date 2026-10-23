import type { ButtonElement, TextElement } from '@pixel-brewery/mosaik-elements-foundation';

/** Mounts the starter and returns its event-listener cleanup. */
export function mountApp(root: HTMLElement): () => void {
  root.innerHTML = `
<mosaik-stack class="starter" orientation="vertical" fit="width">
  <mosaik-stack class="starter__container" orientation="vertical" fit="width">
    <mosaik-stack class="starter__card" orientation="vertical" fit="width">
      <mosaik-stack class="starter__header" orientation="horizontal" vertical-alignment="top">
        <mosaik-stack class="starter__intro" orientation="vertical">
          <mosaik-text class="starter__title" text="Mosaik starter"></mosaik-text>
          <mosaik-text class="starter__description" text="A small starting point for your next web app." wrap></mosaik-text>
        </mosaik-stack>
      </mosaik-stack>
      <mosaik-stack class="starter__content" orientation="vertical" horizontal-alignment="center" vertical-alignment="center" fit="width">
        <mosaik-pulse class="starter__pulse" count="2" duration="3.6s" variant="neutral">
          <mosaik-icon class="starter__icon" icon="sparkles"></mosaik-icon>
        </mosaik-pulse>
        <mosaik-stack class="starter__message" orientation="vertical" horizontal-alignment="center">
          <mosaik-text class="starter__counter" text="0 clicks" wrap alignment="center" data-testid="counter" role="status" aria-live="polite"></mosaik-text>
          <mosaik-text class="starter__hint" text="This counter is local to your app." wrap alignment="center"></mosaik-text>
        </mosaik-stack>
        <mosaik-button class="starter__action" label="Add a click" variant="primary" appearance="solid" size="small" icon="plus" icon-size="small" data-testid="increment"></mosaik-button>
      </mosaik-stack>
    </mosaik-stack>
  </mosaik-stack>
</mosaik-stack>
  `;
  const counter = root.querySelector<TextElement>('[data-testid="counter"]');
  const action = root.querySelector<ButtonElement>('[data-testid="increment"]');
  if (!counter || !action) throw new Error('Missing counter controls.');
  let count = 0;
  const increment = (): void => {
    count += 1;
    counter.text = `${count} ${count === 1 ? 'click' : 'clicks'}`;
  };
  action.addEventListener('click', increment);
  return (): void => {
    action.removeEventListener('click', increment);
    root.replaceChildren();
  };
}
