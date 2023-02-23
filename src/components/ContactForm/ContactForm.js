import { useState } from 'react';
import { Input, Button, Form } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert('This contact is existed!!!!');
      return;
    }

    dispatch(addContact({ name, number, id: nanoid() }));

    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={inputChange}
        required
      />
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={inputChange}
        required
      />
      <Button>Add contact</Button>
    </Form>
  );
}
