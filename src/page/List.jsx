import { useEffect, useState } from "react";
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

  return (
    <div>
      {data.map((person) => (
        <Person person={person} />
      ))}
    </div>
  );
}
