import {makeAutoObservable} from "mobx";
import {createContext} from "react";

export class ButtonsControlStore {
  constructor() {
    makeAutoObservable(this);
  }

  firstControlValue = '';
  secondControlValue = '';

  setFirstControlValue = (value: string) => {
    this.firstControlValue = value;
  }

  clearFirstControlValue = () => {
    this.firstControlValue = '';
  }

  showFirstControlBlank = () => {
    this.firstControlValue = 'Hello world';
  }

  setSecondControlValue = (value: string) => {
    this.secondControlValue = value;
  }

  showSecondControlAlert = ()  => {
    alert(this.secondControlValue);
  }

  checkSecondControlValueAndShow = ()  => {
    if (!isNaN(Number(this.secondControlValue)) && this.secondControlValue !== '') alert(this.secondControlValue);
  }

}
export const ButtonControlContext = createContext<ButtonsControlStore>(new ButtonsControlStore());
