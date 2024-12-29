import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store.jsx';

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
  <App/>
  </PersistGate>
</Provider>
)
