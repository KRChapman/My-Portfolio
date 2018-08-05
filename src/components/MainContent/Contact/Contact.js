import React, { Component } from 'react';
import Card from '../../SharedUI/Card/Card';
import Input from '../../SharedUI/Input/Input';
import ControlBtns from '../../SharedUI/Modal/ControlBtns/ControlBtns';
import styled from 'styled-components';

const ContactContainer = styled.div`
    margin: 20px auto;
  width: 80%;
  text-align: center;

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

    }

    function formInitialConfig(elementType, type, placeholder, input = '') {
      return {
        elementType: elementType,
        elementConfig: {
          type: type,
          placeholder: placeholder,
          test: 'hi',
        },

        input: '',
        validation: {
          required: true,
        },
        valid: false,
      };
    }

  }
  //checkIfValid(value, rules)
  checkValidity(value, rules) {
    let isValid = false;
    if (rules.required) {
      // true or false returned depending if epmpty string
      isValid = value.trim() !== '';
    }
    return isValid;
  }

 



  updateInput = (e) => {

    // using name dom element. ANother aproach is to have inputIdentifier: in state and pass it to
    // a arrow function down below along with the event like in section 13 lecture 226 Handling user input
    const name = e.target.name;
    const value = e.target.value;

    this.setState(currentState => {

    });

  }
  render() {
    const emailForm = this.state.emailForm;

    const inputArray = [];

    for (const key in emailForm) {
      if (emailForm.hasOwnProperty(key)) {
        let input = <Input elementConfig={emailForm[key].elementConfig}
          name={key} key={key} value={emailForm[key].input}
          inputtype={emailForm[key].elementType} updateInput={this.updateInput} />
        inputArray.push(input);
      }

    }
 
    
    return (
      <ContactContainer>

        <h4>Contact me by email</h4>

        <form onSubmit={(this.orderHandler)}>

     {inputArray}
          <ControlBtns >Send </ControlBtns >
          

        </form>
    
      </ContactContainer>
    )
  }
}

//      <Button btnClass={'Danger'} >Cancel Order</Button >clicked={this.orderHandler}

// OTHER OPTION TO RESIVE HISTORY PROPS IS WRAP IN withRouter(ContactData)
//instead I passed in props to contact data from checkout with render and arrow function
export default Contact;