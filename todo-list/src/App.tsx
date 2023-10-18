import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
