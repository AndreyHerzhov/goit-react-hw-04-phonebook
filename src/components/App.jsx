import React, { Component } from "react";
import ContactForm from "./moleculs/ContactForm/ContactForm";
import ContactList from "./moleculs/ContactList/ContactList";
import { nanoid } from 'nanoid'
import styled from "styled-components";
import Filter from "./moleculs/Filter/Filter";
import Notiflix from 'notiflix';



class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
     
  }
  
  addContact = (name, number) => {
    
    const newContact = {
      id: "",
      name: "",
      number: 0 
    }
   
    newContact.name = name
    newContact.number = number
    newContact.id = nanoid() 
    
    const existedContact = this.state.contacts.find(contact => contact.name === newContact.name)
    // console.log(existedContact)
    if(existedContact){
      Notiflix.Report.warning('Notification', `${newContact.name } is already in contacts`, 'Return');
      return
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  componentDidMount() {
     
    const storedContacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(storedContacts)
    if(parsedContacts){
      this.setState({contacts: parsedContacts})
    }
    console.log(parsedContacts)
     
  }
  
  componentDidUpdate( _,prevState ) {
    const updatedContacts = this.state.contacts
    const prevContacts = prevState.contacts
    if(updatedContacts !==  prevContacts) {
      console.log('Todos has been updated')

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    
  }

 
  render() {
    const { contacts } = this.state
    const filteredContacts =  contacts.filter(
      contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
     
    return (
      <div>
        <ContactCard>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact}/>
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter}/>
            <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
        </ContactCard> 
      </div>
    )
  }
}

export default App

const ContactCard =  styled.div`
  width: 450px;
  height: 600px;
  margin-left: 60px;
  margin-top: 60px;
`