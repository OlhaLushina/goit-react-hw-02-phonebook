import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  /* Додавання нового контакту */
  addContact = newContact => {
    if (this.state.contacts.filter(item => item.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  /* Видалення контакту */
  delContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== idContact),
    }));
  };

  /* Фільтр */
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    /* Фільтрація контактів */
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Section>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.delContact} />
      </Section>
    );
  }
}