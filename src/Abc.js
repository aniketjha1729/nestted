import React, { useState, useEffect } from "react";

const RecursiveComponent = ({ typeOfField }) => {
  const [type, setType] = useState("string");

  if (typeOfField === "string" || typeOfField === "boolean") {
    return null; // stop case
  }

  const bgImageStyles = {
    paddingLeft: `40px`,
  };

  return (
    <div style={{ ...bgImageStyles }}>
      <p>Depth: type</p>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
        <option value="object">object</option>
      </select>
      <RecursiveComponent typeOfField={type} />
    </div>
  );
};

export default RecursiveComponent;
