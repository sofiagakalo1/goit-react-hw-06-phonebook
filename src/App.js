import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Contacts from '../src/components/Contacts/Contacts';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Contacts />
      </PersistGate>
    </Provider>
  );
}
