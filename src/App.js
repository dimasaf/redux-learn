import {Provider} from 'react-redux';

import Grid from './components/Grid/Grid';
import store from './app/store';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
