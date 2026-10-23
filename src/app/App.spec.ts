import { afterEach, describe, expect, it } from 'vitest';
import type { TextElement } from '@pixel-brewery/mosaik-elements-foundation';
import { initializeMosaik } from '../mosaik';
import { mountApp } from './App';

let dispose: (() => void) | undefined;
afterEach(() => { dispose?.(); document.body.replaceChildren(); });

describe('starter counter', () => {
  it('updates the rendered count after repeated actions', async () => {
    initializeMosaik();
    const root = document.createElement('main');
    document.body.append(root);
    dispose = mountApp(root);
    const counter = root.querySelector<TextElement>('[data-testid="counter"]')!;
    const button = root.querySelector<HTMLElement>('[data-testid="increment"]')!;
    expect(counter.text).toBe('0 clicks');
    button.click();
    await counter.updateComplete;
    expect(counter.text).toBe('1 click');
    button.click();
    await counter.updateComplete;
    expect(counter.text).toBe('2 clicks');
  });
});
