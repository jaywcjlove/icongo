import '@wcj/dark-mode';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app';
import './reset.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <dark-mode style={{ position: 'absolute', left: 10, top: 6, fontSize: 21 }}></dark-mode>
    <App />
  </BrowserRouter>,
);
