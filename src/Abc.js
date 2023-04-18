import React, { useState } from "react";

const RecursiveComponent = ({ typeOfField }) => {
  const [type, setType] = useState("");
  const [showButton, setShowAddButton] = useState(false);
  if (typeOfField === "string" || typeOfField === "boolean") {
    return null;
  }

  const bgImageStyles = {
    paddingLeft: `40px`,
    backgroundColor: "red",
  };

  return (
    <div style={{ ...bgImageStyles }}>
      <select
        value={type}
        onChange={(e) => {
          console.log(e.target.value);
          setType(e.target.value);
        }}
      >
        <option value="" disabled selected hidden>
          Type
        </option>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
        <option value="object">object</option>
      </select>
      {type === "object" && (
        <button onClick={() => setShowAddButton(true)}>+</button>
      )}

      {type === "object" && showButton === true && (
        <div className="">
          <span></span>
          <span>
            <RecursiveComponent typeOfField={type} />
          </span>
        </div>
      )}
    </div>
  );
};



export default RecursiveComponent;
