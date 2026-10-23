import { initializeMosaik } from './mosaik';
import { mountApp } from './app/App';
import './styles.css';

initializeMosaik();
const root = document.querySelector<HTMLElement>('#app');
if (!root) throw new Error('Missing application root.');
const dispose = mountApp(root);
if (import.meta.hot) import.meta.hot.dispose(dispose);
