import { Provider } from 'react-redux';
import './App.css';
import Content from './components/Content';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Content/>
    </Provider>
  );
}

export default App;
