import { Provider } from "react-redux";
import { store } from "./redux/store";
import View from "../src/containers/View/View";
function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default App;
