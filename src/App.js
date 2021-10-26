import logo from "./logo.svg";
import "./App.css";
import "ellie-component-library/lib/main.css";
import { Button } from "ellie-component-library";

function App() {
  return (
    <div className="App">
      <Button
        styles={{ width: "50px", height: "50px" }}
        type="download"
        onClick={() => {
          console.log("worked created own library using storybook + webpack ");
        }}
      >
        Download
      </Button>
    </div>
  );
}

export default App;
