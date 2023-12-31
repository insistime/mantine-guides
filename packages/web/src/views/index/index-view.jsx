// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// mantine
import { MantineProvider } from '@mantine/core';

// components
import { Index } from '@components/button';

/**
 * index view
 */
const IndexView = () => {
  return (
    <MantineProvider>
      <div className="container">
        <Index />
      </div>
    </MantineProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);
