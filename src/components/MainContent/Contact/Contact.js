import React, { Component } from 'react';
import Card from '../../SharedUI/Card/Card';
import Input from '../../SharedUI/Input/Input';
import ControlBtns from '../../SharedUI/Modal/ControlBtns/ControlBtns';
import styled from 'styled-components';
import {
  withRouter,
  Route,
  Switch,

} from 'react-router-dom';

const ContactContainer = styled.div`
   margin: 50px auto;
    width: 40%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;

  

`;

// margin: 35px auto;
// width: 80 %;
// text - align: center;



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

    this.clickSendHandler = this.clickSendHandler.bind(this);

  }
  //checkIfValid(value, rules)
  checkValidity(value, rules) {
    let isValid = false;
    if (rules.required) {
      // true or false returned depending if epmpty string
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
     
      const validation = name === 'name' ? 
        updateFormElement.validation.required = false : updateFormElement.validation.required;
      console.log("validation", validation);
      console.log("emailForm", emailForm);
      updateFormElement.valid = this.checkValidity(updateFormElement.input, updateFormElement.validation)
      
      emailForm[name] = updateFormElement;
      const formIsValid = checkFormValid(emailForm);
      // emailForm.formIsValid = isFormValid;
      return{
        emailForm,
        formIsValid
      }
    });

  }

  submitFormHandler = (event) => {
    event.preventDefault();
    var form = event.target;
    var elements = form.elements;
    console.log("elements", elements);
    console.log("form", form);
    var data = getFormData(form); 
    console.log("data", data);
    sendFormEmail(data);
    // debugger;

    function getFormData(form) {
      var elements = form.elements;

      var fields = Object.keys(elements).filter(function (k) {
        return (elements[k].name !== "honeypot");
      }).map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
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

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      console.log(formData);
      return formData;
    }

        function sendFormEmail(data){

          
    
          var url = "https://script.google.com/macros/s/AKfycbyOXtZhqYI0Y6_fdb81RGode8LuQ5_ONnCUdRD6eg/exec";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
          return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
  }

  

  clickSendHandler() {
    // console.log('hi');
    // this.props.history.replace('/contact')
  }

  render() {

    const emailForm = this.state.emailForm;
    const inputArray = [];

  

    for (const key in emailForm) {
      if (emailForm.hasOwnProperty(key)) {
        let input = <Input elementConfig={emailForm[key].elementConfig}
          name={key} key={key} value={emailForm[key].input} isValid={emailForm[key].valid}
          inputtype={emailForm[key].elementType} updateInput={this.updateInput} />
        inputArray.push(input);
      }

    }
  
    
    return (
      <ContactContainer>
        <h4>Contact me by email</h4>
        <form onSubmit={(this.submitFormHandler)} id={"gform"} method="POST" >
          {inputArray}
          <ControlBtns clicked={this.clickSendHandler} clickClose={null} disabled={!this.state.formIsValid} color={"#388038;"}>Send </ControlBtns >       
        </form> 
      </ContactContainer>
    )
  }
}
//
export default withRouter(Contact);