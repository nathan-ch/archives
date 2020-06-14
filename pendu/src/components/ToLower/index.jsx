import React, {useState } from "react";

const ToLower = () => {
  //State
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText((event.target.value).toLowerCase());
  };
  
  return (
    <form>
      <label>
        Text:
        <input type="text" value={text} onChange={handleChange} />
      </label>
    </form>
  );
};

export default ToLower;