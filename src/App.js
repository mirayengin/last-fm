import "./App.css";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
        <ToastContainer/>
        <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;