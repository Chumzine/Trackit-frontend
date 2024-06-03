// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import CancelConfirmation from "./CancelConfirmation";

// const App = () => {
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleCancel = () => {
//     // Handle cancel request logic here
//     console.log("Request cancelled");
//     setShowConfirmation(false);
//   };

//   const handleWait = () => {
//     // Handle wait for rider logic here
//     console.log("Waiting for rider");
//     setShowConfirmation(false);
//   };

//   return (
//     <div>
//       <button onClick={() => setShowConfirmation(true)}>
//         Open Confirmation Dialog
//       </button>
//       {showConfirmation && (
//         <CancelConfirmation onCancel={handleCancel} onWait={handleWait} />
//       )}
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
