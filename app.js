import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "h1" }, "I am H1 tagg"),
//     React.createElement("h2", { id: "h2" }, "I am H2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "h1" }, "I am H1 tag"),
//     React.createElement("h2", { id: "h2" }, "I am H2 tag"),
//   ]),
// ]);

const reactElement = <h1>React Element</h1>;
const ReactComponent = () => {
  return (
    <div>
      {reactElement}
      <h1>ReactComponent</h1>
    </div>
  );
};
console.log(ReactComponent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent></ReactComponent>);
//2 packages dev dependieces ,normal dep
