import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
