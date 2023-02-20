import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login, Auth } from "./pages/Login";
import ProtectRoute from "./hoc/ProtectRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<Login /> } />
        </Route>
        <Route path='/' element={<App />}>
          <Route
              path=''
              element={<ProtectRoute  children={<Home />} />}
          />
          <Route
              path='home'
              element={<ProtectRoute  children={<Home />} />}
          />
          <Route
              path='profile'
              element={<ProtectRoute children={<Profile />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
