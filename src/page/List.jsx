import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Person from '../components/Person';

export default function List() {
  const personsList = useSelector((state) => state.persons.personsList);

  return (
    <UsersListContainer>
      <StyledTitle>Users Table</StyledTitle>

      <StyledTableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone number</th>
              <th>Action</th>
            </tr>
          </thead>

          {personsList.length > 0 ? (
            <tbody>
              {personsList.map((person) => (
                <Person person={person} key={person.id} />
              ))}
            </tbody>
          ) : (
            <StyledNoDataRow>
              <td colSpan="4" style={{ padding: '20px 0' }}>
                No data
              </td>
            </StyledNoDataRow>
          )}
        </StyledTable>
      </StyledTableContainer>
    </UsersListContainer>
  );
}

const StyledNoDataRow = styled('tr')`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

const UsersListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  align-self: flex-start;
  max-width: calc(100% - 2em);
  width: 800px;
  font-size: 20px;
`;

const StyledTitle = styled('h2')`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
`;

const StyledTableContainer = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  overflow: hidden;
  color: #fff;
  align-self: flex-start;

  @media screen and (max-width: 500px) {
      border: none;
      box-shadow: none;
      overflow: visible;
`;

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: 10px;
  }

  td {
    text-align: center;
    vertical-align: middle;
  }

  th {
    background-color: #008991;
    font-weight: 700;
    color: #fff;
  }

  thead {
    background-color: #455491;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.6);
  }

  tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 700px) {
    tr,
    td {
      display: block;
    }

    tr {
      padding: 10px 0;
      position: relative;
    }

    thead {
      display: none;
    }

    td {
      clear: both;
      margin-left: 100px;
      padding: 4px 20px 4px 190px;
      position: relative;
      text-align: left;
    }

    td:before {
      color: #008991;
      content: '';
      display: block;
      left: 0;
      position: absolute;
    }

    td:nth-child(1):before {
      content: 'Name:';
    }

    td:nth-child(2):before {
      content: 'Surname:';
    }

    td:nth-child(3):before {
      content: 'Phone number:';
    }

    td:nth-child(4):before {
      content: 'Action:';
    }
  }

  @media screen and (max-width: 500px) {
    td {
      margin: 0;
      padding: 5px 0 5px 80px;
    }

    td:before {
      font-size: 0.8em;
      padding-top: 0.4em;
      padding-bottom: 0.3em;
      position: relative;
    }

    td:last-child {
      padding-bottom: 1rem;
    }

    tr {
      background-color: rgba(0, 0, 0, 0.4);
      border: 1px solid #6cbec6;
      border-radius: 10px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      margin: 0.5rem 0;
      padding: 0;
    }
  }
`;
