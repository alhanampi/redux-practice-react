import React from "react";
import "./App.css";
//redux:
import { Provider } from "react-redux";
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksMilkshake from "./components/HooksMilkshake";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> 
        <HooksMilkshake />
      </div>
    </Provider>
  );
}

export default App;
