import React from 'react';
import CovidTracker from './component/CovidTracker';
import Store from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store = {Store}>
        <CovidTracker />
      </Provider>
    </div>
  );
}

export default App;
