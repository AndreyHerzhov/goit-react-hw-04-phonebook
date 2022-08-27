import React, { Component} from "react";
import { NameInputTitle,ContactFormWrapper,ContactFormButton, Input } from "./ContactForm.styled"; 
import PropTypes from "prop-types"

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
      }
 
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = (event) =>  {
        event.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state.name , this.state.number)
        this.setState({name: "", number: ""})
      }

    render() {
      
        return (
            <ContactFormWrapper onSubmit={this.handleSubmit}>
                <NameInputTitle>
                Name:
                </NameInputTitle>
                <Input
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, 
                        apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, 
                        Charles de Batz de Castelmore d'Artagnan"
                        required/>        
                
                <NameInputTitle>
                Number:
                </NameInputTitle>
                <Input
                      onChange={this.handleInputChange}
                      value={this.state.number}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, 
                              dashes, parentheses and can start with +"
                      required
                />
                <ContactFormButton type="submit" value="Add contact" />
          </ContactFormWrapper>
        )
      }
  }         
          
            


export default ContactForm

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
   
};




