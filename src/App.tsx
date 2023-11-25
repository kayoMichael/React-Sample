import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Beijing"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;