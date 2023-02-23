import { Card, Button } from './ContactList.styled';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </li>
        ))}
      </Card>
    </>
  );
}
