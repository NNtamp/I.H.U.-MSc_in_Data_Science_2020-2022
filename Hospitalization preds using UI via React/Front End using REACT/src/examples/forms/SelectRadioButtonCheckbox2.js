import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const SelectRadioButtonCheckbox = () => {
  const [language, setlanguage] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const changeLanguage = (e) => {
    setlanguage(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const changeFood = (e) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      // setInterests
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  return (
    <div>
      <Title>Select, radio button and checkbox</Title>
      <div>
        <label htmlFor="language">Admission Type:</label>
        <select name="language" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="Emergency">Emergency</option>
          <option value="Urgent">Urgent</option>
          <option value="Newborn">Newborn</option>
          <option value="Elective">Elective</option>
        </select>
      </div>
      <div>
        <label htmlFor="admission_origin">Admission origin:</label>
        <select name="admission_origin" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="EMERGENCY ROOM ADMISSION">Emergency Room Admission</option>
          <option value="Physical referral/Normal deli">Physical referral/Normal deli</option>
          <option value="Transfer from hospital/Extram">Transfer from hospital/Extram</option>
          <option value="NOT AVAILABLE">Not available</option>
          <option value="OTHER ADMISSION ORIGIN">Other admission origin</option>
        </select>
      </div>
      <div>
        <label htmlFor="insurance">Insurance:</label>
        <select name="insurance" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="Medicare">Medicare</option>
          <option value="Private">Private</option>
          <option value="Medicaid">Medicaid</option>
          <option value="Goverment">Goverment</option>
          <option value="Self Pay">Self Pay</option>
        </select>
      </div>
      <div>
        <label htmlFor="religion">Religion:</label>
        <select name="religion" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="JEWISH">Jewish</option>
          <option value="PROTESTANT QUAKER">Protestand Quaker</option>
          <option value="CATHOLIC">Catholic</option>
          <option value="OTHER RELIGION">Other Religion</option>
          <option value="NOT AVAILIABLE RELIGION">Not available Religion</option>
        </select>
      </div>
      <div>
        <h2>Gender:</h2>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={changeGender}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={changeGender}
          />{" "}
          Female
        </label>
      </div>
      <div>
        <h2>Interests:</h2>
        <div>
          <label>
            <input
              type="checkbox"
              name="programming"
              value="programming"
              checked={interests.includes("programming")}
              onChange={changeFood}
            />{" "}
            Programming
          </label>
          <label>
            <input
              type="checkbox"
              name="movies"
              value="movies"
              checked={interests.includes("movies")}
              onChange={changeFood}
            />{" "}
            Movies
          </label>
          <label>
            <input
              type="checkbox"
              name="boxing"
              value="boxing"
              checked={interests.includes("boxing")}
              onChange={changeFood}
            />{" "}
            Boxing
          </label>
        </div>
      </div>
      <div>
        <h2>{language}</h2>
        <h2>{gender}</h2>
        <ul>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectRadioButtonCheckbox;
