import React, { useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const dots = [
    { userId: "userone", working: 1 },
    { userId: "usertwo", working: 3 },
    { userId: "usertwo", working: 1 },
    { userId: "userone", working: 5 },
    { userId: "userthree", working: 1 },
    { userId: "userthree", working: 4 },
    { userId: "userthree", working: 5 },
    { userId: "userfour", working: 5 },
  ];
  let id = "";
  let result = [];
  for (let i = 0; i < dots.length; i++) {
    id = dots[i].userId;
    // console.log(id);
    let result2 = dots.filter((el) => {
      return el.userId === id;
    });
    result.push(result2);
    // console.log(result);
    // setState(result);
  }
  console.log(result);
  
  return (
    <div>
      <h1>Hi!</h1>
    </div>
  );
}

export default App;
