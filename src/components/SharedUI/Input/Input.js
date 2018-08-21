import React from 'react';

import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
`;
 
const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const InputElement = styled.input`
  outline: none;
  border: ${ props => props.inputStyle.border };
  background-color: ${ props => props.inputStyle.backgroundColor };
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
`;

const Input = (props) => {
  let inputElement = null;
  let invalidStyles = {
    border: "1px solid red",
    backgroundColor: "#FDA49A",
  }
  let validStyles = {
    border: "1px solid #ccc",
    backgroundColor: "#f8f8f8",
  }
  let inputStyle = invalidStyles;
  
  if (props.isValid || props.isValid == null){
    inputStyle = validStyles;
  }

  switch (props.inputtype) {
    case ('input'):
      inputElement = <InputElement inputStyle={inputStyle} value={props.input} name={props.name} {...props.elementConfig} onChange={props.updateInput} />
      break;
    case ('textarea'):
      inputElement = <textarea style={{ height: "150px", width: "100%", ...inputStyle }} value={props.input} name={props.name}  {...props.elementConfig} onChange={props.updateInput} />
      break;
    case ('select'):
      inputElement = (<select  name={props.name} value={props.input} onChange={props.updateInput} >
        {props.elementConfig.options.map(option => (
          <option key={option.displayValue} value={option.value}>
            {option.displayValue}
          </option>
        ))}

      </select >)
      break;
    default:
      inputElement = <InputElement  {...props} />
  }

  return (
    <InputContainer >
      <Label htmlFor="">{props.label}</Label>
      {inputElement}
    </InputContainer>

  )
}

export default Input;