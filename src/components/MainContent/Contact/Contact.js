import React, { Component } from 'react';
import Input from '../../SharedUI/Input/Input';
import ControlBtns from '../../SharedUI/Modal/ControlBtns/ControlBtns';
import styled from 'styled-components';

const ContactContainer = styled.div`
    margin: 50px auto;
    width: 60%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
`;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailForm: {
        name: formInitialConfig('input', 'text', 'Your Name'),
        email: formInitialConfig('input', 'email', 'Your email'),

        message: formInitialConfig('textarea', 'text', 'Your message'),

      },
      formIsValid: false,
      isThankYou : false,
    }

    function formInitialConfig(elementType, type, placeholder, input = '') {
      return {
        elementType: elementType,
        elementConfig: {
          type: type,
          placeholder: placeholder,
       
        },

        input: '',
        validation: {
          required: true,
        },
     
        valid: null,
      };
    }
  }

  checkValidity(value, rules) {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== '';
    }
    else{
      isValid = true;
    }
    return isValid;
  }

  updateInput = (e) => {
    const checkFormValid = (emailForm) => {
      let formisValid = true;

      for (const key in emailForm) {
        if (emailForm[key].valid != null) {
          formisValid = emailForm[key].valid && formisValid !== false;
        }
        else if (emailForm[key] !== 'name' && emailForm[key].valid == null){
          formisValid = false;
        } 
      }
      return formisValid;
    }
    const name = e.target.name;
    const value = e.target.value;

    this.setState(currentState => {

      const emailForm = { ...currentState.emailForm};
      const updateFormElement = {...emailForm[name]};
      updateFormElement.input = value;   
      updateFormElement.validation.required = name === 'name' ? 
         false : updateFormElement.validation.required;

      updateFormElement.valid = this.checkValidity(updateFormElement.input, updateFormElement.validation );
      emailForm[name] = updateFormElement;
      const formIsValid = checkFormValid(emailForm);

      return{
        emailForm,
        formIsValid
      }
    });

  }

  submitFormHandler = (event) => {
    event.preventDefault();
    var form = event.target;
    var data = getFormData(form); 
    sendFormEmail(data);

    const isThankYou = !this.state.isThankYou;

    this.setState({ isThankYou });
    this.clickSendHandler();
    function getFormData(form) {
      var elements = form.elements;

      var fields = Object.keys(elements).filter(function (k) {
        return (elements[k].name !== "honeypot");       // eslint-disable-next-line
      }).map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;

        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      }).filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item;
      });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];
        formData[name] = element.value;

        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });

      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; 
      formData.formGoogleSendEmail = form.dataset.email || ""; 

      return formData;
    }

    function sendFormEmail(data){
      var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&')
      let reqObj = {
        method: 'POST',
        body: encoded,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      } 
      const url = "https://script.google.com/macros/s/AKfycbyOXtZhqYI0Y6_fdb81RGode8LuQ5_ONnCUdRD6eg/exec";
      fetch(url, reqObj);
    }
   
  }

  clickSendHandler() {
   let emailForm =  {...this.state.emailForm}

    for (const key in emailForm) {
     let fieldUpdate = { ...emailForm[key]};      
      fieldUpdate.input = "";
      emailForm[key] = fieldUpdate;
   }
    this.setState({ emailForm });
  }

  render() {
    const emailForm = {...this.state.emailForm};
    const inputArray = [];
    for (const key in emailForm) {
        let input = <Input elementConfig={emailForm[key].elementConfig}
          name={key} key={key} input={emailForm[key].input} isValid={emailForm[key].valid}
          inputtype={emailForm[key].elementType} updateInput={this.updateInput} />
        inputArray.push(input);
    }
  
    const thankYou = this.state.isThankYou ? <h4>Thank you for your interest</h4> : null;
    return (
      <ContactContainer>
        <h4>Contact me by email</h4>
        <form onSubmit={(this.submitFormHandler)} id={"gform"} method="POST" >
          {inputArray}
          <ControlBtns clicked={null} clickClose={null} color={"#388038"} disabled={!this.state.formIsValid}>Send </ControlBtns >       
        </form> 
        {thankYou}
      </ContactContainer>
    )
  }
}

export default Contact;