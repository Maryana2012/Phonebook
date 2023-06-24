import PhoneBook from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from 'redux/store';
import Registration from 'Pages/Registration';
import Login from 'Pages/Login';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter 
    // basename='/goit-react-hw-08-phonebok'
    >
     <Provider store={store}>
          {/* <PhoneBook /> */}
          {/* <Registration/> */}
        {/* <Login/> */}
        <App />
       </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
