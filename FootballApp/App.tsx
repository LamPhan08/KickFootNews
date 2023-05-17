import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Feed } from './src/screens/Feed';
import { RootNavigation } from './src/navigation/navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <RootNavigation/>
    </Provider>
  );
};

export default App;