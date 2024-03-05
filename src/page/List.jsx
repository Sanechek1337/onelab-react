import { useEffect, useState } from "react";
import styled from "styled-components";
import Person from "../components/Person";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    setData(list);
  }, []);

  if (data.length <= 0) return <p>Нет данных</p>;

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
        {data.map((person, index) => (
          <Person person={person} key={index} data={data} setData={setData} />
        ))}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled("table")`
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
