import Navbar from './components/Navbar'
import USerList from './components/USerList';
import { Provider } from 'react-redux';
import store from './components/store';


function App() {
    return (
      <>
      <Provider store ={store}>
        <Navbar/>
        <USerList/>
      </Provider>
  </>
  );
}

export default App
