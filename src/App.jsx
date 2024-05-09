import React from "react";

function App(props) {
  // todo : son 객체 만들기
  const son = {
    firstName: "손",
    lastName: "흥민",
    address: "토트넘",
    country: "UK",
    married: false,
  };
  return (
    <div>
      <ul>
        <li>성 : {son.firstName}</li>
        <li>이름 : {son.lastName}</li>
        <li>주소 : {son.address}</li>
        <li>국가 : {son.country}</li>
        <li>결혼여부 : {son.married ? "기혼" : "미혼"}</li>
      </ul>
    </div>
  );
}

export default App;
