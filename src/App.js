import "./styles.css";
import { useState } from "react";
import NestedTextField from "./RecursiveComponent";

export default function App() {
  const [numberOfComponent, setNumberOfComponent] = useState(1);
  return (
    <div className="App">
      <div className="ComponentWrapper shadow">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setNumberOfComponent((prev) => prev + 1)}
        >
          +
        </button>
        <div className="NestedComponentContainer p-2">
          {Array.from({ length: numberOfComponent }).map((el) => {
            return <NestedTextField typeOfField="object" />;
          })}
        </div>
      </div>
    </div>
  );
}
