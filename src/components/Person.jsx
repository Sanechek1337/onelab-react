import { useDispatch } from 'react-redux';
import { removePerson } from '../store/person/personsSlice';

export default function Person({ person }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removePerson(person));
  };

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.surname}</td>
      <td>{person.phoneNumber}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
