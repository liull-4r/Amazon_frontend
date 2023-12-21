
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './Components/StateProvider/StateProvider.jsx';
import reducer, { initialState } from './Components/Reducer/reducer.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  // </React.StrictMode>
);
