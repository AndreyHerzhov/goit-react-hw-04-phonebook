import React from "react";
import ContactForm from "./moleculs/ContactForm/ContactForm";
import ContactList from "./moleculs/ContactList/ContactList";
import { nanoid } from 'nanoid'
import styled from "styled-components";
import Filter from "./moleculs/Filter/Filter";
import Notiflix from 'notiflix';
import { useState, useEffect } from "react";


export default function App() {
  const [contacts, setContacts] = useState(
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  )

  const [filter, setFilter] = useState('')

  const addContact = (name, number) => {
    
    const newContact = {
      id: "",
      name: "",
      number: 0 
    }
   
    newContact.name = name
    newContact.number = number
    newContact.id = nanoid() 
    
    const existedContact =  contacts.find(contact => contact.name === newContact.name)
    
    if(existedContact){
      Notiflix.Report.warning('Notification', `${newContact.name } is already in contacts`, 'Return');
      return
    }
     
    setContacts([...contacts, newContact])
    // console.log(contacts)
  }

   const changeFilter = (e) => {
    setFilter(e.currentTarget.value)  
  }

   const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId)) 
   
  }
 
  useEffect(() => {
   
    const storedContacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(storedContacts)
    if(parsedContacts){
      setContacts(parsedContacts ) 
     }
    
     console.log('parsedContacts', parsedContacts)
}, [])


  
  useEffect(() => {
       localStorage.setItem('contacts', JSON.stringify(contacts))
    },[contacts])



  const filteredContacts =  contacts.filter(
            contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    
  return (
    <div>
      <ContactCard>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact}/>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter}/>
          <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
      </ContactCard> 
    </div>
  )
}

 

const ContactCard =  styled.div`
  width: 450px;
  height: 600px;
  margin-left: 60px;
  margin-top: 60px;
`