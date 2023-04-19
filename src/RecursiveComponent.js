import React, { useState } from "react";

const RecursiveComponent = ({ typeOfField }) => {
  const [type, setType] = useState("");
  // const [showButton, setShowAddButton] = useState(false);
  const [count, setCount] = useState(0);
  if (typeOfField === "string" || typeOfField === "boolean") {
    return null;
  }

  const bgImageStyles = {
    paddingLeft: `40px`
  };

  return (
    <div style={{ ...bgImageStyles }} className="Abc">
      <input type="text" placeholder="text..." className="addButton" />
      <select
        value={type}
        onChange={(e) => {
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
        <button
          type="button"
          className="btn btn-secondary py-0"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
      )}
      {Array.from({ length: count }).map((el) => {
        return <RecursiveComponent typeOfField={type} />;
      })}
    </div>
  );
};

export default RecursiveComponent;
