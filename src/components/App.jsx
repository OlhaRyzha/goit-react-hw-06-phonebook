import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <>
      <Title message="Phonebook" />
      <ContactForm />
      <Title message="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
}
