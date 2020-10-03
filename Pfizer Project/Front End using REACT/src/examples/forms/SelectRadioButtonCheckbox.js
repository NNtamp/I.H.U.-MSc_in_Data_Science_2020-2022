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
      <Title>Hospitalization Prediction</Title>
      <div>
        <label htmlFor="language">Favorite language:</label>
        <select name="language" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Rust">Rust</option>
          <option value="PHP">PHP</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div>
        <h2>Gender:</h2>
        <label>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={gender === "male"}
            onChange={changeGender}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="F"
            checked={gender === "female"}
            onChange={changeGender}
          />{" "}
          Female
        </label>
      </div>
      <div>
        <label htmlFor="language">Admission Type:</label>
        <select name="admission_type" value={language} onChange={changeLanguage}>
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
        <label htmlFor="marital_status">Marital status:</label>
        <select name="marital_status" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="MARRIED">Married</option>
          <option value="SINGLE">Single</option>
          <option value="WIDOWED">Widowed</option>
          <option value="DIVORCED">Divorced</option>
          <option value="Not specified">Not Specified</option>
        </select>
      </div>
      <div>
        <label htmlFor="ethnicity">Ethnicity:</label>
        <select name="ethnicity" value={language} onChange={changeLanguage}>
          <option value="">Select...</option>
          <option value="WHITE">WHITE</option>
          <option value="CAUCASIAN">CAUCASIAN</option>
          <option value="BLACK/AFRICAN AMERICAN	">BLACK/AFRICAN AMERICAN</option>
          <option value="NOT AVAILIABLE ETHNICITY	">NOT AVAILIABLE ETHNICITY	</option>
        </select>
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
