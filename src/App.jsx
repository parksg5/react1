import React from "react";

function App(props) {
  const person = {
    email: "test@example.com",
    name: "test",
    address: "gangnam",
    country: "USA",
  };

  const { email, name, address, country } = person;

  console.log("emial", email); // test@example.com
  console.log("name", name); // test
  console.log("address", address); // gangnam
  console.log("country", country); // USA

  return <div></div>;
}

export default App;
