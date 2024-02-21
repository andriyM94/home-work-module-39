import { useState } from "react";

const StateComponent = () => {
  const defaultNames = ['Ivan', 'Stepan', 'Ira', 'Andriy', 'Anna'];
  const [name, setName] = useState('...');

  const onClickHandler = () => {
    const index = Math.floor(Math.random() * defaultNames.length);
    setName(defaultNames[index]);
  };

  return(
    <>
      <p>
        StateComponent
      </p>
      <p>Hello: <span>{name}</span></p>
      <button onClick={onClickHandler}>Click me</button>
    </>
  );
}

export default StateComponent;