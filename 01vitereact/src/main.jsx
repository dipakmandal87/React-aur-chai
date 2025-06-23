import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1> Custom App | Dipak</h1>
    </div>
  );
}

// direct object given to createRoot cannot exicute because at end react also create a tree a object tree from an element   and finnaly inject it to dom . but it doestn't work when we give direct object to createRoot because this  element is created by myself and it is not a react element so it will not work

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const anotherUser = "chai aur react ";

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click here to go to google",

  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
