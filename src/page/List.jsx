import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Person from '../components/Person';

export default function List() {
  const personsList = useSelector((state) => state.persons.personsList);

  if (personsList.length <= 0) return <p>Нет данных</p>;

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone number</th>
          <th>Delete user</th>
        </tr>
      </thead>

      <tbody>
        {personsList.map((person) => (
          <Person person={person} key={person.phoneNumber} />
        ))}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled('table')`
  border-collapse: collapse;
  background-color: #fff;
  text-align: center;

  td,
  th {
    border: 1px solid #000;
    padding: 10px 20px;
  }

  thead {
    background-color: #455491;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;
