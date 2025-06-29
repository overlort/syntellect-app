import {action, makeAutoObservable} from "mobx";
import {CountryInfo} from "../../types/countryInfo.interface";
import {getCountryByName} from "../../api/apiService";
import {createContext} from "react";

export class AutocompleteStore {
  constructor() {
    makeAutoObservable(this);
  }

  controlValue = ''
  maxHints = 3;
  hints: CountryInfo[] = [];
  loading = false;

  setControlValue = (value: string) => {
    this.controlValue = value;
    this.setHints();
  }

  setMaxHints = (value: number) => {
    this.maxHints = value;
  }

  setHints = () => {
    this.loading = true;
    getCountryByName(this.controlValue).then(
      action('fetchSuccess', value => {
        this.hints = Array.from(new Set(value.map(o => JSON.stringify(o)))).map(str => JSON.parse(str));
        this.loading = false;
    }));
  }

  getHints = () => {
    return this.hints.slice(0, this.maxHints);
  }
}
export const AutocompleteContext = createContext<AutocompleteStore>(new AutocompleteStore());