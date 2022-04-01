import { useState } from "react";

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const AddCharacters = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [eye_color, setEye_color] = useState("");
  const [gender, setGender] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a character");
      return;
    }

    onAdd({ name, height, mass, eye_color, gender });

    setName("");
    setHeight("");
    setMass("");
    eye_color("");
    gender("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <label>Set Eye Color</label>
        <select onChange={AddCharacters} style={{width:70}}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
      </div>

      <div className="form-control form-control-check">
        <label>Set Gender</label>
        <select onChange={AddCharacters} style={{width:70}}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <input type="submit" value="Save character" className="btn btn-block" />
    </form>
  );
};

export default AddCharacters;
