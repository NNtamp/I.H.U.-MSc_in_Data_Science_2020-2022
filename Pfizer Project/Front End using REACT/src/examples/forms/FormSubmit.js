import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

async function seacrhSWCharacter(character) {
  try {
    const res = await fetch(
      `https://swapi.dev/api/people/?search=${character}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const FormSubmit = () => {
  const [character, setCharacter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const updateCharacter = (e) => {
    setCharacter(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await seacrhSWCharacter(character);
    setSearchResults(response.results);
  };

  return (
    <div>
      <Title>Form submit (async)</Title>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="name">Star Wars character search:</label>
          <input
            type="text"
            name="name"
            value={character}
            onChange={updateCharacter}
          />
        </div>
        <button type="submit">Search!</button>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(({ name, gender }) => (
            <li key={name}>
              name: {name} / gender: {gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormSubmit;
