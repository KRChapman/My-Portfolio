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
  border: 1px solid #ccc;
  font: inherit;
  padding: 6px 10px;


`;
  /* & :focus{
      outline: none;
  background-color: #ccc;
  } */

const Input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case ('input'):
      inputElement = <InputElement value={props.input} name={props.name} {...props.elementConfig} onChange={props.updateInput} />
      break;
    case ('textarea'):
      inputElement = <textarea value={props.input} name={props.name}  {...props} onChange={props.updateInput} />
      break;
    case ('select'):
      inputElement = (<select name={props.name} value={props.input} onChange={props.updateInput} >
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