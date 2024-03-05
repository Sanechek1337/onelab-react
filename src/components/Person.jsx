export default function Person({ person, data, setData }) {
  const handleDelete = () => {
    const filteredData = data.filter((elem) => {
      if (JSON.stringify(elem) === JSON.stringify(person)) {
        sessionStorage.removeItem("list");

        return false;
      } else {
        return true;
      }
    });

    sessionStorage.setItem("list", JSON.stringify(filteredData));
    setData(filteredData);
  };

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.surname}</td>
      <td>{person.phone}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
