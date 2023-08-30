// react
import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * index view
 */
const IndexView = () => {
  return <div className="container"></div>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);
