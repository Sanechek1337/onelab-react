import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addPerson } from '../store/person/personsSlice';

export default function Add() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

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

  const onSave = () => {
    dispatch(addPerson(personFormData));

    alert(`Пользователь ${personFormData.name} добавлен`);
    navigateTo('/');
  };

  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledInput
          value={personFormData.name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="First Name"
        />
        <StyledInput
          value={personFormData.surname}
          onChange={handleInputChange}
          type="text"
          name="surname"
          placeholder="Last Name"
        />
        <StyledInput
          value={personFormData.phoneNumber}
          onChange={handleInputChange}
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <StyledButton
          onClick={onSave}
          disabled={
            !personFormData.name ||
            !personFormData.surname ||
            !personFormData.phoneNumber
          }
        >
          Save
        </StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled('div')`
  width: 350px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000038;
  border: 3px solid #2a3357;
  border-radius: 12px;
`;

const StyledForm = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled('input')`
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid #808080;
  font-size: 18px;
`;

const StyledButton = styled('button')`
  align-self: center;
  padding: 8px 20px;
  background-color: #40486d;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #2a3357;
  }

  &:disabled {
    background-color: #d5d1d2;
  }
`;
