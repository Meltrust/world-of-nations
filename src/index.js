import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={''}>
        <div className="container-fluid min-vh-100 bg-light">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="missions" element={<Missions />} />
            <Route path="profile" element={<Profile />} /> */}
          </Routes>
        </div>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

