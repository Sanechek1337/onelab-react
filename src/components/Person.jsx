import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { removePerson } from '../store/person/personsSlice';
import styled from 'styled-components';

export default function Person({ person }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const toastPosition =
      window.innerWidth < 500 ? 'top-center' : 'bottom-right';

    toast(
      <div>
        User <StyledName>{person.name}</StyledName> has been added
      </div>,
      {
        position: toastPosition,
      }
    );

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

const StyledName = styled('span')`
  color: #ffd700;
  font-style: italic;
`;
