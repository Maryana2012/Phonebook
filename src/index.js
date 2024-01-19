import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
       <BrowserRouter
        basename="/Phonebook"
       >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer/>
        </PersistGate>
      </Provider>
      </BrowserRouter>
     </ChakraProvider>
  
  </React.StrictMode>
);
