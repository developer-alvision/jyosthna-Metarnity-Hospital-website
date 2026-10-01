import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

export function render() {
  return renderToString(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}