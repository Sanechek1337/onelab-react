import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Add() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const navigateTo = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onSave = () => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    list.push({
      name,
      surname,
      phone,
    });
    sessionStorage.setItem("list", JSON.stringify(list));
    alert(`Пользователь ${name} добавлен`);
    navigateTo("/");
  };

  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledInput
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="First Name"
        />
        <StyledInput
          value={surname}
          onChange={handleSurnameChange}
          type="text"
          name="surname"
          placeholder="Last Name"
        />
        <StyledInput
          value={phone}
          onChange={handlePhoneChange}
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
        />
        <StyledButton onClick={onSave} disabled={!name || !surname || !phone}>
          Save
        </StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled("div")`
  width: 350px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000038;
  border: 3px solid #2a3357;
  border-radius: 12px;
`;

const StyledForm = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled("input")`
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid #808080;
  font-size: 18px;
`;

const StyledButton = styled("button")`
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
