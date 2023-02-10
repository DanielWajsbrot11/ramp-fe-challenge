import classNames from "classnames"
import { useRef, useState, useEffect } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)  

  const [checked, setChecked] = useState(() => JSON.parse(localStorage.getItem(inputId) || "false"))

  useEffect(() => {
    localStorage.setItem(inputId, JSON.stringify(checked))
  }, [checked, inputId])

  function handleClick(){
    setChecked(!checked)
    document.getElementById(inputId)?.click()
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={handleClick}
      />
      <input
        id={inputId}
        readOnly={true}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          onChange(!checked)
        }}
      />
    </div>
  )
}
