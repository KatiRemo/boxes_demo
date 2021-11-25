import React, { Component } from "react";
import Box from "./Box";

class Boxes extends Component {
  state = {
    persons: [
      { id: 1, name: "Roxie", age: 27, title: "Boss" },
      { id: 2, name: "Kati", age: 33, title: "Designer" },
      { id: 3, name: "Marie", age: 35, title: "Developer" },
      { id: 4, name: "Kristen", age: 36, title: "Developer" },
    ],
  };

  changeNameHandler = () => {
    console.log("WOW");
  };

  render() {
    return (
      <>
        {this.state.persons.map((item) => (
          <Box
            key={item.id}
            name={item.name}
            age={item.age}
            title={item.title}
          />
        ))}
      </>
    );
  }
}

export default Boxes;
