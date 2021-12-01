import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import Header from './components/Header';
import CountryView from './components/countryView/CountryView';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <div className="min-vh-100 p-0">
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/target" element={<CountryView />}>
              <Route path=":countryId" element={<CountryView />} />
            </Route>
          </Routes>
        </div>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
