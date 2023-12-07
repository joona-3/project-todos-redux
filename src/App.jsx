import { Provider } from 'react-redux'
import { store } from "./store.js";
import { TaskList } from './Components/TaskList.jsx';
import { StartPage } from './Components/StartPage.jsx';

export const App = () => {
  return (
  <Provider store={store}>
  <StartPage />
   </Provider>
   )
};
