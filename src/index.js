import PhoneBook from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from 'redux/store';
import Registration from 'Pages/Registration';
import Login from 'Pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          {/* <PhoneBook /> */}
          {/* <Registration/> */}
        <Login/>
      </Provider>
  </React.StrictMode>
);
