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
    if (
      personFormData.name.trim() === '' ||
      personFormData.surname.trim() === '' ||
      personFormData.phoneNumber.trim() === ''
    ) {
      return;
    }

    dispatch(addPerson(personFormData));

    alert(`Пользователь ${personFormData.name} добавлен`);
    navigateTo('/');
  };

  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledTitle>Add person</StyledTitle>

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
  width: 400px;
  padding: 40px;
  margin: 0 10px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const StyledForm = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledInputContainer = styled('div')`
  position: relative;
`;

const StyledTitle = styled('h2')`
  color: #fff;
  text-align: center;
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
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

const StyledButton = styled('button')`
  align-self: center;
  padding: 8px 40px;
  background-color: transparent;
  border: 1px solid #03e9f4;
  color: #03e9f4;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 8px;
  transition: 0.5s;

  &:hover {
    background-color: #01a9b2;
    color: #fff;
    border-radius: 5px;
    box-shadow:
      0 0 5px #01a9b2,
      0 0 25px #01a9b2;
  }

  &:disabled {
    background-color: #d5d1d2;
    border: 1px solid transparent;
    color: #343434;
    box-shadow: none;
  }
`;
