import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const InputAndTextarea = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <Title>Input and textarea</Title>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea name="comment" value={comment} onChange={updateComment} />
      </div>
      <h1>{name}</h1>
      <p>{comment}</p>
    </div>
  );
};

export default InputAndTextarea;
