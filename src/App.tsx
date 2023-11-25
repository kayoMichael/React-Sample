import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/button";
import { useState } from "react";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Beijing"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
