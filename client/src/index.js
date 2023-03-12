import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ConsultationStore from "./store/ConsultationStore";
const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
  <React.StrictMode>
      <Context.Provider value={{
          user: new UserStore(),
          consultation: new ConsultationStore()
      }}>
        <App />
      </Context.Provider>
  </React.StrictMode>
);

