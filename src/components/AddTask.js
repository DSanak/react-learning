import { useState } from "react";

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eyeColor: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eyeColor: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eyeColor: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eyeColor: "blue",
    gender: "male",
  },
];

const AddCharacters = ({ addTask, addedTask }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [gender, setGender] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ name, height, mass, eyeColor, gender });

    if (!name) {
      alert("Please add a character");
      return;
    }

    addTask({ name, height, mass, eyeColor, gender });

    if (addedTask) {
      setName("");
      setHeight("");
      setMass("");
      setEyeColor("");
      setGender("");
    }
  };

  const handleNameChange = (name) => {
    if (typeof name === "string") setName();
  };

  console.log();
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Height</label>
        <input
          type="text"
          placeholder="Add height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Mass</label>
        <input
          type="number"
          placeholder="Add mass(kg)"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Gender</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value={null}>Wybierz opcje</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="form-control form-control-check">
        <label>Set Eye Color</label>
        <select onChange={(e) => setEyeColor(e.target.value)}>
          <option value={null}>Wybierz opcje</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </div>

      <input type="submit" value="Save character" className="btn btn-block" />
    </form>
  );
};

export default AddCharacters;
