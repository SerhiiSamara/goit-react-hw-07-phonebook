import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = e => dispatch(changeFilter(e.target.value));
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={onInputChange} />
    </Label>
  );
};
