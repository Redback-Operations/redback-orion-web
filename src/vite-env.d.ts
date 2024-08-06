/// <reference types="vite/client" />


declare module 'react/jsx-runtime' {
    export = React;
  }
  
  declare module './components/Chart' {
    import React from 'react';
    const Chart: React.FC;
    export default Chart;
  }
  
  declare module './components/analytics' {
    export const initGA: () => void;
    export const logPageView: () => void;
  }
  
  declare module 'react' {
    const React: typeof import('react');
    export default React;
  }
  
  declare module 'react-dom/client' {
    const ReactDOM: typeof import('react-dom/client');
    export default ReactDOM;
  }
  