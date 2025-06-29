import {CountryInfo} from "../../types/countryInfo.interface";
import "./autocomplete.css"
import {useState} from "react";

const Autocomplete = (props: {
  value: string,
  hints: CountryInfo[],
  onSelectMaxHints: (e: number) => void,
  onChange: (value: string) => void,
  loading: boolean,
  maxHints: number,
}) => {

  const [maxHintsValue, setMaxHintsValue] = useState<number>(3);
  const [showHints, setShowHints] = useState(false);
  const hintClickHandle = (hint: CountryInfo) => {
    setShowHints(false);
    props.onChange(hint.name);
  }

  const onChangeHandler = (e: any) => {
    setShowHints(true);
    props.onChange(e.target.value)
  }

  return <div className="autocomplete-container">
    <div>
      <input className="input" value={props.value} onChange={onChangeHandler}/>

        {props.hints.length !== 0 && showHints && props.hints.map((hint, i) => (
          <div className="hint-container" onClick={() => hintClickHandle(hint)} key={i}>
            <p className="hint-short-name">{hint.name}</p>
            <p className="hint-full-name">{hint.fullName}</p>
            <img src={hint.flag} alt=''/>
          </div>
        ))}
        {props.hints.length === 0 && props.loading && <p>Loading</p>}

    </div>
    <div className="max-hints-container">
      <input value={maxHintsValue}  type="number" onChange={(e: any) => setMaxHintsValue(e.target.value)}/>
      <button onClick={() => props.onSelectMaxHints(maxHintsValue)}>select hints to show</button>
    </div>
  </div>
}

export default Autocomplete;