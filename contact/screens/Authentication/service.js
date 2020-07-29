import React, {useState} from "react";

export function useValidationHandling(initialValidationState) {
  const [formValidErrors, setFormValidErrors] = useState(initialValidationState)
  
  const presetDecorator = (setter, state) => {
    const fieldName = Object.keys(state)[0]
    const value = Object.values(state)[0]
    const newFormValidErrors = {...formValidErrors, [fieldName]: ""}
    setFormValidErrors(newFormValidErrors)
    setter(value)
  }
  return [formValidErrors, setFormValidErrors, presetDecorator]
}