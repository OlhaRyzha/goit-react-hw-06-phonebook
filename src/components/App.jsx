import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { nanoid } from 'nanoid';
import storage from 'helpers/storage';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setFilter } from 'redux/contactsSlice';

export const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const contacts = useSelector(state => state.contactsData.contacts);
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    storage.save('contacts-list', contacts);
  }, [contacts]);

  const addProduct = contact => {
    if (contacts.some(p => p.name === contact.name)) {
      alert(`Contact ${contact.title} is already exists!`);
      return;
    }
    const finalContact = {
      id: nanoid(),
      ...contact,
    };
    dispatch(setContacts([finalContact, ...contacts]));
  };
  const deleteProduct = productId => {
    dispatch(setContacts(contacts.filter(contact => contact.id !== productId)));
  };

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const getFilteredContacts = () => {
    const normaliseFilter = filter.trim().toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normaliseFilter);
    });
  };

  const filteredContacts = getFilteredContacts();
  return (
    <>
      <Title message="Phonebook" />
      <ContactForm onAddProduct={addProduct} />
      <Title message="Contacts" />
      <Filter onChangeFilter={handleFilter} value={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteProduct={deleteProduct}
      />
    </>
  );
}
