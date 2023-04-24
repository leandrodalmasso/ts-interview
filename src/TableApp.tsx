import { useState } from "react";

// 1- render a table based on data structure below

// id: number;
// name: string;
// age: number;
// father: {id}
// mother: {id}

// 2- Add a button for each row to remove the row from the table

// 3- Add a form, so a user is able to fill in the name & the age,
//    hit a submit button and add a new row.

export interface Value {
  id: number;
  name: string;
  age: number;
  mother?: number;
  father?: number;
}

export default function App() {
  const [values, setValues] = useState<Value[]>([
    { id: 0, name: "John", age: 30, mother: 1, father: 2 },
    { id: 1, name: "Jane", age: 30, mother: 1, father: 2 },
    { id: 2, name: "Mick", age: 30, mother: 1, father: 2 },
  ]);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("0");

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   if (e.target.id === "name") setName(e.target.value);

  //   if (e.target.id === "age") setAge(e.target.value);
  // };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // setValues([...values, { id: Date.now(), name, age: Number(age) }]);
    // setName("");
    // setAge("0");
    const target = e.target as typeof e.target & {
      name: { value: string };
      age: { value: string };
    };
    setValues([
      ...values,
      {
        id: Date.now(),
        name: target.name.value,
        age: Number(target.age.value),
      },
    ]);
  };

  const handleDelete = (id: number) => {
    const newValues = values.filter((value) => value.id !== id);
    setValues(newValues);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            // value={name}
            // onChange={handleInputChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            id="age"
            name="age"
            // value={age}
            // onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Father</th>
            <th>Mother</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {values.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.father}</td>
              <td>{value.mother}</td>
              <td>
                <button onClick={() => handleDelete(value.id)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
