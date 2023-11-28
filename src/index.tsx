import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { Root, createRoot } from 'react-dom/client';

let root: Root;

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
root = createRoot(container!);

root.render(<App />);
