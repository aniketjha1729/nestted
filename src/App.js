import "./styles.css";
import { useState } from "react";
import { data } from "./data";
import NestedTextField from "./Abc";

export default function App() {
  return (
    <div className="App">
      <NestedTextField typeOfField="object" />
      <div style={{ margin: "8px" }}>
        {/* <RecursiveComponent data={data} /> */}
      </div>
    </div>
  );
}

// const RecursiveComponent = ({ data }) => {
//   return (
//     <div style={{ paddingLeft: "20px" }}>
//       {data.map((parent) => {
//         return (
//           <div key={parent.name}>
//             <span>{parent.name}</span>
//             {/* Base Condition and Rendering recursive component from inside itself */}
//             <div>
//               {parent.children && <RecursiveComponent data={parent.children} />}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
