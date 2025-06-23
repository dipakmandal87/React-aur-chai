import Chai from "./chai";

function App() {
  const username = "Dipak"; // this is a variable
  return (
    <>
      <Chai />
      <h3>
        Have chai now:{username} is variable injected which is a evaluated
        expression
      </h3>
      <h4>Its getting cold </h4>
    </>
  );
}

export default App;
