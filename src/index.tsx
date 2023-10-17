import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import COUNT_OFFERS from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App countOffers={COUNT_OFFERS} />
  </React.StrictMode>
);
