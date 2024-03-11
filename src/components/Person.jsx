import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { editPerson, removePerson } from '../store/person/personsSlice';

export default function Person({ person }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [personFormData, setPersonFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    setPersonFormData((prevState) => {
      const newFormData = { ...prevState };
      newFormData[event.target.name] = event.target.value;

      return newFormData;
    });
  };

  const handleDelete = () => {
    if (!window.confirm('Are you sure?')) return;

    const toastPosition =
      window.innerWidth < 500 ? 'top-center' : 'bottom-right';

    toast(
      <div>
        User <StyledName>{person.name}</StyledName> has been deleted
      </div>,
      {
        position: toastPosition,
      }
    );

    dispatch(removePerson(person.id));
  };

  const handleSave = () => {
    const toastPosition =
      window.innerWidth < 500 ? 'top-center' : 'bottom-right';

    if (
      personFormData.name.trim() === '' ||
      personFormData.surname.trim() === '' ||
      personFormData.phoneNumber.trim() === ''
    ) {
      toast.error('Please fill in all fields', { position: toastPosition });
    } else {
      toast(
        <div>
          User <StyledName>{personFormData.name}</StyledName> has been changed
        </div>,
        {
          position: toastPosition,
        }
      );

      dispatch(editPerson({ id: person.id, ...personFormData }));
      setEditMode(false);
      setPersonFormData({ name: '', surname: '', phoneNumber: '' });
    }
  };

  const handleClose = () => {
    setPersonFormData({ name: '', surname: '', phoneNumber: '' });
    setEditMode(false);
  };

  return editMode ? (
    <tr>
      <td>
        <StyledInputContainer>
          <StyledInput
            value={personFormData.name}
            onChange={handleInputChange}
            type="text"
            name="name"
            required
          />
          <StyledLabel htmlFor="name">Name</StyledLabel>
        </StyledInputContainer>
      </td>
      <td>
        <StyledInputContainer>
          <StyledInput
            value={personFormData.surname}
            onChange={handleInputChange}
            type="text"
            name="surname"
            required
          />
          <StyledLabel htmlFor="surname">Surname</StyledLabel>
        </StyledInputContainer>
      </td>
      <td>
        <StyledInputContainer>
          <StyledInput
            value={personFormData.phoneNumber}
            onChange={handleInputChange}
            type="text"
            name="phoneNumber"
            required
          />
          <StyledLabel htmlFor="phoneNumber">Phone number</StyledLabel>
        </StyledInputContainer>
      </td>
      <td>
        <StyledButton onClick={handleSave}>Save</StyledButton>
        <StyledButton onClick={handleClose}>Cancel</StyledButton>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{person.name}</td>
      <td>{person.surname}</td>
      <td>{person.phoneNumber}</td>
      <td>
        <StyledButton onClick={() => setEditMode(true)}>Edit</StyledButton>
        <StyledButton onClick={handleDelete}>Delete</StyledButton>
      </td>
    </tr>
  );
}

const StyledName = styled('span')`
  color: #ffd700;
  font-style: italic;
`;

const StyledInputContainer = styled('div')`
  position: relative;
  max-width: 180px;
  margin: auto;
`;

const StyledLabel = styled('label')`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.3s;
`;

const StyledInput = styled('input')`
  padding: 10px 0 6px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  width: 100%;

  &:focus ~ label,
  &:valid ~ label {
    top: -16px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

const StyledButton = styled('button')`
  align-self: center;
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid #03e9f4;
  color: #03e9f4;
  font-size: 16px;
  border-radius: 8px;
  transition: 0.5s;
  margin: 0 6px 0 6px;

  &:hover {
    background-color: #01a9b2;
    color: #fff;
    border-radius: 5px;
    box-shadow:
      0 0 5px #01a9b2,
      0 0 25px #01a9b2;
  }
`;
