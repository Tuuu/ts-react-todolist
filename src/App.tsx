import React from "react";
import Button from "./button/Button";

function App() {
  const click: React.MouseEventHandler = (event) => {
    console.log(event.currentTarget.clientTop);
  };
  return (
    <div className="App">
      <Button size="small">small</Button>
      <Button onClick={click}>default</Button>
      <Button size="large">large</Button>
    </div>
  );
}

export default App;
