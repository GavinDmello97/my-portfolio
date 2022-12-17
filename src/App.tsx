import "./App.scss";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/config/configureStore";
function App() {
  return (
    <Provider store={store}>
      <div className=" vh-100 d-flex ">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
