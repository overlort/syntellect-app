import React, {useContext} from "react";
import "./App.css";
import ButtonsControl from "./components/buttonsControl/buttonsControl";
import {Position} from "./types/buttonsControl.interface";
import {observer} from "mobx-react";
import {
  ButtonControlContext,
} from "./stores/buttonsControlStore/buttonsControlStore";
import Autocomplete from "./components/autocomplete/autocomplete";
import {AutocompleteContext} from "./stores/autocompleteStore/autocompleteStore";
import Divider from "./components/divider/divider";


const App = observer(() => {
  const controlStore = useContext(ButtonControlContext);
  const autocompleteStore = useContext(AutocompleteContext);

  const buttonsControlDataFirst = [{
    text: "clear",
    cb: () => controlStore.clearFirstControlValue,
    position: Position.R
  },{
    text: "hello world",
    cb: () => controlStore.showFirstControlBlank,
    position: Position.R
  }]

  const buttonsControlDataSecond = [{
    text: "check if number",
    cb: () => controlStore.checkSecondControlValueAndShow,
    position: Position.L
  },{
    text: "alert",
    cb: () => controlStore.showSecondControlAlert,
    position: Position.R
  }]

  return <div className="container">
    <ButtonsControl
      onChange={controlStore.setFirstControlValue}
      value={controlStore.firstControlValue}
      buttons={buttonsControlDataFirst}
    />
    <Divider/>
    <ButtonsControl
      onChange={controlStore.setSecondControlValue}
      value={controlStore.secondControlValue}
      buttons={buttonsControlDataSecond}
    />
    <Divider/>
    <Autocomplete
      value={autocompleteStore.controlValue}
      hints={autocompleteStore.getHints()}
      onSelectMaxHints={autocompleteStore.setMaxHints}
      onChange={autocompleteStore.setControlValue}
      loading={autocompleteStore.loading}
      maxHints={autocompleteStore.maxHints}
    />
  </div>;
})

export default App;
