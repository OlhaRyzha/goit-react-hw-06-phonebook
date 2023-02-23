import { Input } from './Filter.styled';
import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <Input
        type="text"
        name="filter"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </>
  );
}
