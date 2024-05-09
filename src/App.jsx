function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></> 사용

  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Quia, tempore, veniam?</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Doloribus, sed.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Id, tempore.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
